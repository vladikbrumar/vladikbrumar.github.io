function serviceTypeSwitch() {
    var list = document.getElementById("serviceList");

    console.log(list)

    for (i = 0; i <= list.childElementCount - 1; i++) {
        list.children[i].addEventListener("click", loadInterior);
    }
}

function loadInterior() {
    let activeService = this.outerText
    let interior = document.getElementById("interior")
    let exterior = document.getElementById("exterior")

    if (activeService === 'Interior') {
        interior.classList.add("active")
        exterior.classList.remove("active")
    } else if (activeService === 'Exterior') {
        exterior.classList.add("active")
        interior.classList.remove("active")
    } else {
        throw "no service chosen"
    }
}
