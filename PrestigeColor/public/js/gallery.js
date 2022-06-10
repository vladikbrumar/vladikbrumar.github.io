// service type checkbox 
var switchButton = document.getElementById("toggle_vat")

// categories
var categoryItems = document.getElementsByClassName("category__item")

// toggle switch and load its categories block
function loadGallery() {
    console.log("switch clicked!")
    var exterior = document.getElementById("exterior")
    var interior = document.getElementById("interior")
    if(switchButton.checked) {
        exterior.style.display = "flex";
        interior.style.display = "none";
    } else {
        interior.style.display = "flex";
        exterior.style.display = "none";
    }
}

// parse data from json file
async function fetchExteriorData() {
    try {
        const response = await fetch('../public/data/exterior.json', {
            method: 'GET',
            credentials: 'same-origin'
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

// click on category reads data from json 
// and then load block with its examples
function clickOnCategory(){
    for(var i = 0; i<categoryItems.length; i++) {
        categoryItems[i].addEventListener('click', function() {
            laodCategoryBlock(this.parentNode, this.dataset.category)
        })
    }
}

// depends on service(interior and exterior) and category 
// of item loads its examples
async function laodCategoryBlock(service, category) {
    // data from json file
    const data = await fetchExteriorData();

    // Back button
    var backBtn = document.getElementById("btn-back");
    var exampleBlock = document.getElementById("examples");    
    backBtn.style.display = "inline-block";
    backBtn.dataset.backTo = service.id;

    // templates
    const srcTemplate = `../public/images/${service.id}/${category}/`

    // showing/hidding elements
    document.getElementById(service.id).style.display = "none";
    document.getElementById("examples").style.display = "flex";

    document.getElementById("switch").style.pointerEvents = "none";

    // loads data
    removeAllChild(exampleBlock);
    var currData = {
        ...data[category]
    }

    for(var i=0; i<currData.count; i++) {
        var exampleItemDiv = document.createElement('div');
        exampleItemDiv.className = 'example__item';

        var exampleItemImg = document.createElement('img');
        exampleItemImg.src = (srcTemplate + currData.all[i]);

        var exampleItemTitle = document.createElement('div');
        exampleItemTitle.className = 'item__title';
        exampleItemTitle.textContent = 'more'
        

        exampleItemDiv.appendChild(exampleItemImg)
        exampleItemDiv.appendChild(exampleItemTitle)
        exampleBlock.appendChild(exampleItemDiv)
    }    
}

// removes all children from parent node
function removeAllChild(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.lastChild);
    }
}

// back button 
function galleryBackBtn(obj) {
    obj.style.display = "none"

    document.getElementById(obj.dataset.backTo).style.display = "flex";
    document.getElementById("examples").style.display = "none";
    document.getElementById("switch").style.pointerEvents = "auto";
    
    document.getElementById("focusTo").scrollIntoView();
}

clickOnCategory()






