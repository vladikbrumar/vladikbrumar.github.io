const buttons = document.getElementsByClassName("btn-option")
const backBtn = document.getElementById('back')
const testBlock = document.getElementById('test')
const resultBlock = document.getElementById('result')
const resultMess = document.getElementById('result-message')

function addClicks() {
    for(var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(){
            checkAnswer(this)
        })
    }
}

function addBack() {
    backBtn.addEventListener('click', function() {
        testBlock.classList.add('active');
        resultBlock.classList.remove('active');
        const list = ["result__message"];
        resultMess.classList = list;
    })
}

function checkAnswer(btn) {
    testBlock.classList.remove('active');
    resultBlock.classList.add('active');
    
    const option = btn.dataset.option;

    if(option === 'William') {
        resultMess.classList.add('correct')
        resultMess.innerText = 'coorect'
    } else if(option === 'James') {
        resultMess.innerText = 'incorrect'
        resultMess.classList.add('incorrect')

    }
}

window.onload = (event) => {
    console.log('window loaded!');
    addClicks();
    addBack();
}