export class HtmlElements{

  createCard(word,parentElement){
    console.log(parentElement.getAttribute('tag'));
    const card = document.createElement('div');
    card.classList.add('mb-3','card');
    card.setAttribute('id', `${parentElement.id}-${word.toLowerCase()}`);
    card.setAttribute('tag', `${word.toLowerCase()}`); //check is the answer is correct
    parentElement.appendChild(card);
  }

  createCardBody(parentElement){
    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    parentElement.appendChild(cardBody);
  }

  createCardTitle(word,parentElement){
    const cardTitle = document.createElement('h4');
    cardTitle.classList.add('card-title','display-4');
    cardTitle.textContent = word;
    parentElement.appendChild(cardTitle);
  }
}