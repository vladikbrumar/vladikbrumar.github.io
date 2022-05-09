// JSON
import data from "../data/gallery.json" assert { type: "json" };

// Interior and Exterior switch
var interiorCat = document.getElementById("interior__categories")
var exteriorCat = document.getElementById("exterior__categories")

var interiorType = document.getElementById("interiorType")
var exteriorType = document.getElementById("exteriorType")

var typeSet = "exterior";
var serviceSet = "floor"
var projects = []

// MODAL WINDOW
var modal = document.getElementById("galleryModal");

// Get the button that opens the modal
var btn = document.getElementById("modalBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

interiorType.addEventListener("click", function () {
    interiorCat.classList.add("active");
    exteriorCat.classList.remove("active");

    typeSet = interiorType.innerText.toLowerCase();
});

exteriorType.addEventListener("click", function () {
    exteriorCat.classList.add("active");
    interiorCat.classList.remove("active");

    typeSet = exteriorType.innerText.toLowerCase();
})

// Gallery content

// categories swtich

var catItems = document.getElementsByClassName("category__item");
var galleryItems = document.getElementsByClassName("gallery__content-item");
for (let i = 0; i < galleryItems.length; i++) {
    galleryItems[i].addEventListener("click", loadGallery);
}

for (var i = 0; i < catItems.length; i++) {
    catItems[i].addEventListener("click", loadGalleryContent)
}



function loadGalleryContent() {
    serviceSet = this.innerText.toLowerCase();
    var ind = this.getAttribute("data-index");

    for (var i = 0; i < data[ind].projects.length; i++) {
        var project = {
            ...data[ind].projects[i]
        }
        projects[i] = project;
    }

    insertGalleryItems();
}

function insertGalleryItems()
    console.log(typeSet)
    console.log(serviceSet)
    console.log(typeSet)

    document.getElementById("gallery__content").innerHTML = ''
    document.getElementById("gallery__content").innerHTML += `${Array(projects.length).join(0).split(0).map((item, i) => `<div class="gallery__content-item"><img src="assets/images/${typeSet}/${serviceSet}/${projects[i].name}/${projects[i].mainIMG}" alt=""></div>`).join('')}`;

    if (projects.length < 3) {
        document.getElementById("gallery__content").style.justifyContent = "space-evenly";
    }
    for (let i = 0; i < galleryItems.length; i++) {
        galleryItems[i].addEventListener("click", loadGallery);
        galleryItems[i].setAttribute("data-index", i);
    }
}
var workDone = "after";

function loadGallery() {

    var imgSrc = this.children[0].getAttribute('src')
    var srcArr = imgSrc.split("/")

    var ind = this.getAttribute('data-index');
    document.getElementById("slider").innerHTML = '';
    document.getElementById("slider").innerHTML += `${Array(projects[ind].after.length).join(0).split(0).map((item, i) => `<div class="slider-item"><img src="assets/images/${typeSet}/${serviceSet}/${projects[ind].name}/${workDone}/${projects[ind].after[i]}" alt=""></div>`).join('')}`;

    document.getElementById("slider").children[0].classList.add("active")

    document.getElementById("slider").innerHTML += `<span class="slider-control-prev" role="button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left-circle" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
                    </svg>
                </span>
                <span class="slider-control-next" role="button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                    </svg>
                </span>`

    const slider = new Slider(
        document.querySelector(".slider")
    );
    modal.style.display = "block";

}



// When the user clicks the button, open the modal
//btn.onclick = function () {
//
//}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";

}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}





class Slider {
    constructor(sliderElem) {
        this.slider = sliderElem;
        this.sliderItems = sliderElem.getElementsByClassName("slider-item");
        this.nextBtn = sliderElem.querySelector(".slider-control-next");
        this.prevBtn = sliderElem.querySelector(".slider-control-prev");
        this.currentIndex = 0;
        this.prevItemIndex = this.sliderItems.length - 1;
        this.nextItemIndex = 1;
        this.isSliding = false;
        this.setEventListeners();
    }

    setEventListeners() {
        this.prevBtn.addEventListener("click", () => {
            this.prev();
        });
        this.nextBtn.addEventListener("click", () => {
            this.next();
        });
    }

    next() {
        if (this.isSliding) return;
        this.isSliding = true;
        this.sliderItems[this.nextItemIndex].classList.add("next-item");
        setTimeout(() => {
            this.sliderItems[this.currentIndex].classList.add("slide-next");
            this.sliderItems[this.nextItemIndex].classList.add("slide-end");
            this.sliderItems[this.nextItemIndex].classList.add("active");
        }, 20);
        setTimeout(() => {
            this.sliderItems[this.nextItemIndex].classList.remove("next-item", "slide-end");
            this.sliderItems[this.currentIndex].classList.remove("slide-next", "active");
            this.isSliding = false;
            this.setIndices("NEXT");
        }, 400);
    }

    prev() {
        if (this.isSliding) return;
        this.isSliding = true;
        this.sliderItems[this.prevItemIndex].classList.add("prev-item");
        setTimeout(() => {
            this.sliderItems[this.currentIndex].classList.add("slide-prev");
            this.sliderItems[this.prevItemIndex].classList.add("slide-end");
            this.sliderItems[this.prevItemIndex].classList.add("active");
        }, 20);
        setTimeout(() => {
            this.sliderItems[this.prevItemIndex].classList.remove("prev-item", "slide-end");
            this.sliderItems[this.currentIndex].classList.remove("slide-prev", "active");
            this.isSliding = false;
            this.setIndices("PREV");
        }, 400);
    }

    setIndices(direction) {
        let index;
        if (direction === "NEXT") {
            index = this.currentIndex === this.sliderItems.length - 1 ? 0 : this.currentIndex + 1;
        }
        if (direction === "PREV") {
            index = this.currentIndex === 0 ? this.sliderItems.length - 1 : this.currentIndex - 1;
        }
        if (index === 0) {
            this.currentIndex = index;
            this.nextItemIndex = index + 1;
            this.prevItemIndex = this.sliderItems.length - 1;
        } else if (index === this.sliderItems.length - 1) {
            this.currentIndex = this.sliderItems.length - 1;
            this.nextItemIndex = 0;
            this.prevItemIndex = this.currentIndex - 1;
        } else {
            this.currentIndex = index;
            this.nextItemIndex = index + 1;
            this.prevItemIndex = index - 1;
        }
    }
}
