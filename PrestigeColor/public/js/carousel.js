// modal window - gallery view
var modal = document.getElementById("galleryModal");
var galleryItems = document.getElementsByClassName("open__modal");
var span = document.getElementsByClassName("closeBtn")[0];

// carousel 
var carouselInner = document.getElementById("carousel-inner")
const CABINETS_HTML = `<div class="carousel-item active">
<img class="carousel__img" src="../public/images/interior/cabinets/cabinet1-1.jpg" alt="First slide">
</div>
<div class="carousel-item">
<img class="carousel__img" src="../public/images/interior/cabinets/cabinet1-2.jpg" alt="Second slide">
</div>
<div class="carousel-item">
<img class="carousel__img" src="../public/images/interior/cabinets/cabinet2-1.jpg" alt="Third slide">
</div>
<div class="carousel-item">
<img class="carousel__img" src="../public/images/interior/cabinets/cabinet2-2.jpg" alt="4th slide">
</div>
<div class="carousel-item">
<img class="carousel__img" src="../public/images/interior/cabinets/cabinet3-1.jpg" alt="5th slide">
</div>
<div class="carousel-item">
<img class="carousel__img" src="../public/images/interior/cabinets/cabinet3-2.jpg" alt="6th slide">
</div>
<div class="carousel-item">
<img class="carousel__img" src="../public/images/interior/cabinets/cabinet4-1.jpg" alt="7th slide">
</div>
<div class="carousel-item">
<img class="carousel__img" src="../public/images/interior/cabinets/cabinet4-2.jpg" alt="8th slide">
</div>`

const WALLS_HTML = `<div class="carousel-item active">
<img class="carousel__img" src="../public/images/interior/walls/walls1-1.jpg" alt="First slide">
</div>
<div class="carousel-item">
<img class="carousel__img" src="../public/images/interior/walls/walls1-2.jpg" alt="Second slide">
</div>
<div class="carousel-item">
<img class="carousel__img" src="../public/images/interior/walls/walls2-1.jpg" alt="Third slide">
</div>
<div class="carousel-item">
<img class="carousel__img" src="../public/images/interior/walls/walls2-2.jpg" alt="4th slide">
</div>
<div class="carousel-item">
<img class="carousel__img" src="../public/images/interior/walls/walls3-1.jpg" alt="5th slide">
</div>
<div class="carousel-item">
<img class="carousel__img" src="../public/images/interior/walls/walls3-2.jpg" alt="6th slide">
</div>
<div class="carousel-item">
<img class="carousel__img" src="../public/images/interior/walls/walls3-3.jpg" alt="7th slide">
</div>
<div class="carousel-item">
<img class="carousel__img" src="../public/images/interior/walls/walls4-1.jpg" alt="8th slide">
</div>
<div class="carousel-item">
<img class="carousel__img" src="../public/images/interior/walls/walls4-2.jpg" alt="9th slide">
</div>`

const OTHER_HTML = `<div class="carousel-item active">
<img class="carousel__img" src="../public/images/interior/other/other1-1.jpg" alt="First slide">
</div>
<div class="carousel-item">
<img class="carousel__img" src="../public/images/interior/other/other1-2.jpg" alt="Second slide">
</div>
<div class="carousel-item">
<img class="carousel__img" src="../public/images/interior/other/other2-1.jpg" alt="Third slide">
</div>
<div class="carousel-item">
<img class="carousel__img" src="../public/images/interior/other/other2-2.jpg" alt="4th slide">
</div>
<div class="carousel-item">
<img class="carousel__img" src="../public/images/interior/other/other3-1.jpg" alt="5th slide">
</div>`

for (var i = 0; i < galleryItems.length; i++) {
    galleryItems[i].addEventListener('click', function() {
        modal.style.display = "block";
        var activeInteriorType = this.childNodes[1].dataset.interior;
        addCarouselInner(activeInteriorType);
    });
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function addCarouselInner(activeInteriorType) {
  if(activeInteriorType === "cabinets"){
    carouselInner.innerHTML = CABINETS_HTML;
  } else if(activeInteriorType === "walls"){
    carouselInner.innerHTML = WALLS_HTML;
  } else if(activeInteriorType === "other"){
    carouselInner.innerHTML = OTHER_HTML;
  } else {
    console.log("Error no active interior type!")
  }
}