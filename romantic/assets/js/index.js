import textData from "../data/data.json" assert { type: "json" };;

window.onload = laodedPage;

const typeInId = "#sentence"

async function typeSentence(sentence, eleRef, delay = 0) {
    const letters = sentence.split("");
    let i = 0;
    document.getElementById("typing-container").getElementsByTagName("span")[0].innerHTML="";
    while(i < letters.length) {
      await waitForMs(delay);
      document.querySelector(eleRef).append(letters[i]);
      i++
    }
    return;
  }
  
  function changeBackground(count) {
    var introClasses = document.getElementById("intro").classList
    introClasses.remove(introClasses[1])
    var className = ''

    if(count===0)
      className = 'end';

    if(count===1)
      className = 'intro';

    if(count===2)
    className = 'begin';

    if(count===3)
      className = 'apology';

    if(count===4)
      className = 'congrats';

    if(count>=6)
      className = 'love';

    if(count===5)
      className = 'joke';

    introClasses.add(className)
  }
  
  function waitForMs(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  var dislikeCount = 0;
  var loveCount = 1;
  
  var buttons = document.getElementsByClassName("btn")

  function laodedPage(){
    typeSentence(textData.intro, typeInId);
    addClicksToButton();
  }

  function addClicksToButton(){
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", function(){  
          if(this.id === 'dislike'){
            loveCount=0;
            typeSentence(textData.end, typeInId)
            changeBackground(loveCount)
          }

          var text = "";

          if(this.id === 'love'){
            ++loveCount;
            if(loveCount === 1)
              typeSentence(textData.begin, typeInId);

            if(loveCount === 2)
              typeSentence(textData.begin, typeInId);

            if(loveCount === 3)
              typeSentence(textData.apology, typeInId);
            
            if(loveCount === 4)
              typeSentence(textData.congrats, typeInId);

            if(loveCount > 5)
              typeSentence(textData.love, typeInId);

            if(loveCount === 0)
              typeSentence(textData.end, typeInId)
            
            if(loveCount === 5)
              typeSentence(textData.joke, typeInId)

              changeBackground(loveCount)
          }
      })
    }
  }
