// import { Child, Parent } from "./module.js";
import { JsonData} from "./jsondata.js";
import { Render } from "./render.js";

const json = new JsonData("sentences.json");
const render = new Render();

let index = 0;
let length = 0;

const nextButton = document.getElementById('button');
nextButton.addEventListener('click', (event) =>{
  event.preventDefault();
  if(index !== length){
    console.log('print length: ' + length);
    console.log('print index: ' + index);
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
  json.getDataByIndex(index);
  setTimeout(_=>{
    render.writeWordsPerId(json.sentence,1);
    index += 1;
  }, 300);
}