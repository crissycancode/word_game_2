// import { Child, Parent } from "./module.js";
import { JsonData} from "./jsondata.js"; import { Render } from "./render.js"; import { Shuffle } from "./shuffle.js"; import { HtmlElements } from "./element.js";


const json = new JsonData("sentences.json");
const htmlElement = new HtmlElements();

let index = 0;
let length = 0;

const nextButton = document.getElementById('button');
nextButton.addEventListener('click', (event) =>{
  event.preventDefault();
  if(index !== length){
    renderWords();
  }else{
    console.log('end game');
  }
});

//loads DOMContent
window.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed');
  json.getFileLength();
  setTimeout(_=>{
    length += json.length;
  }, 300);
  renderWords();
});

function renderWords(){
  json.getDataByIndex(index); //get the values from jasondata.js
  setTimeout(_=>{
    index += 1;
    const shuffle = new Shuffle(json.sentence);
    drawBoard(document.getElementById('containerWord'), shuffle.shuffleArray());
    drawBoard(document.getElementById('containerBox'), shuffle.stringToArray());
  }, 300);
} //end of renderWords() function

function drawBoard(element, words){
  let array = words;
  //get the longer word to get the box sizes
  element.innerHTML = '';
  for (let i = 0; i < array.length; i++){
    htmlElement.createCard(array[i], element);
    htmlElement.createCardBody(element.childNodes[i]);
    if(element.id === 'containerWord'){
      htmlElement.createCardTitle(array[i],(element.childNodes[i]).childNodes[0]);
    }
  }
}