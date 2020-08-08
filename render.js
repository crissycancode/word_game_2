export class Render{
  constructor(element){
    this.boxesElement = document.getElementById('boxes');
    this.wordsElement = document.getElementById('words');
    // this.answer = '';


  }

  writeWordsPerId(words,id){
    this.answer = words;
    this.wordsElement.innerHTML = '';
    let array = this.shuffleWords(words);
    for(let i = 0; i < array.length; i++){
      this.createWords(array[i]);
    }
    this.drawBoxesPerId(array.length);
  }
  
  drawBoxesPerId(arrayLength){
    this.boxesElement.innerHTML = '';
    for (let i = 0; i < arrayLength; i++){
      this.createBox();
    }
  }

  shuffleWords(words){
    let array = words.split(' ');
        array = array.sort(_=>Math.random()-0.5);   
        return array;
  }

  createBox(){ //D R O P P A B L E
    const box = document.createElement('div');
    // BOX.classList.add("card","border-dark", "mb-3", "box", "droppable");
    box.classList.add("border-dark", "mb-3", "box", "droppable");

    this.boxesElement.appendChild(box);
    const box_body = document.createElement('div');
    box_body.classList.add("card-body");
    box.appendChild(box_body);
    
  }

  createWords(wr){ // D R A G G A B L E
    const words = document.createElement('div');
    // WORDS.classList.add("card", "text-white", "bg-info", "mb-3", "word", "draggable");
    words.classList.add("mb-3", "word", "draggable");
    words.setAttribute("draggable","true");
    words.setAttribute("data-draggable-id", wr);
    

    this.wordsElement.appendChild(words);
    const words_body = document.createElement('div');
    words_body.classList.add("card-body");
    words_body.style.padding = '5px';
    words.appendChild(words_body);

    const word = document.createElement('h4');
    word.classList.add("card-title", "display-4");
    word.textContent = wr;

    words_body.appendChild(word);
  }

  checkAnswer(words, isLast){
    if(isLast){
      //disable button
      console.log('disbale button');
      let button = document.getElementById('nextBtn');
      button.disabled = true;
    }
  }
  
}
// drag and drop class

export class Draggable {
  constructor(){
    this.dragElement = document.querySelectorAll('.draggable');
    this.dropElement = document.querySelectorAll('.droppable');
    this.dragElement.forEach(element => {
      element.addEventListener('dragStart', this.dragStart);
      element.addEventListener('dragEnd', this.dragEnd);
    });
    this.dropElement.forEach(element => {
      element.addEventListener('dragEnter', this.dragEnter);
      element.addEventListener('dragOver', this.dragOver);
      element.addEventListener('dragLeave', this.dragLeave);
      element.addEventListener('dragDrop', this.dragDrop);
    });
    
  }
  dragStart(e){
    e.dataTansfer.setData('text', e.target.id);
  }
  dragEnd(){
    
  }
  dragOver(e){
    if(!e.target.classList.contains('dropped')){
      e.preventDefault();
    }
  }
  dragEnter(e){
    if(!e.target.classList.contains('dropped')){
      e.target.classList.add("droppable-hover");
    }
  }
  dragLeave(){
    e.target.classList.remove("droppable-hover");
  }
  dragDrop(e){
    e.preventDefault();
    const tar = e.target;
    tar.classList.remove("droppable-hover");
    const draggableElementData = e.dataTransfer.getData('text');
    const droppableElementData = tar.getAttribute('data-draggable-id');

    // if(draggableElementData === droppableElementData){
      
      tar.classList.add('dropped');
      const draggableElement = document.getElementById(draggableElementData);
      tar.style.backgroundColor = draggableElement.style.color;

      draggableElement.classList.add('dragged');
      draggableElement.setAttribute('draggable', 'false');
      console.log(draggableElement.id);
      tar.innerHTML = '';
      tar.innerHTML += `<i class="fas fa-${draggableElement.id} draggable" draggable="true" style= "justify-content: center; color: white;" id="cat"></i>`;
    // }
  }
}