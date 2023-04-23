const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.btn-next');
const prevBtn = document.querySelector('.btn-prev');
const clickBtn = document.querySelector('.btn-click-me');
const navBtns = document.querySelector('.nav-btns');

const pins = document.querySelectorAll('.pin');

if(slides.length === 1){
    nextBtn.style.display = 'none';
    prevBtn.style.display = 'none';
    clickBtn.style.display = 'block';
    navBtns.style.justifyContent = 'center';
} else {
    nextBtn.style.display = 'block';
    prevBtn.style.display = 'block';
}

slides.forEach(function(slide, index) {
    slide.style.left = `${index * 100}%`;
})

let counter = 0;

nextBtn.addEventListener('click', () => {
    counter++;
    carousel();
})

prevBtn.addEventListener('click', () => {
    counter--;
    carousel();
})

clickBtn.addEventListener('click', () => {
    alert('Ты красотка!');
})

function carousel() {
    if(counter === 0){
        prevBtn.style.visibility = 'hidden';
    } else {
        prevBtn.style.visibility = 'visible';
    }

    if(counter === slides.length) {
        counter = 0;
    }
    if(counter < 0) {
        counter = slides.length - 1;
    }

    slides.forEach(function(slide){
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });

    addActivePin(counter);
}

function removeActivePin(){
    pins.forEach(function(pin, index){
        pin.classList.remove('active');
    })
}

function addActivePin(index){
    removeActivePin();
    pins[index].classList.add('active');
}
