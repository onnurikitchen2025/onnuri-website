/* =========================================
   ONNURI KITCHEN — QUOTE SYSTEM
========================================= */

function getQuoteList(){
  return JSON.parse(localStorage.getItem('onnuriQuoteList')) || [];
}

function saveQuoteList(list){
  localStorage.setItem('onnuriQuoteList', JSON.stringify(list));
}


/* =========================================
   UPDATE QUOTE COUNT
========================================= */

function updateQuoteCount(){

  const quoteCounts = document.querySelectorAll('.quote-count');
  const quoteList = getQuoteList();

  quoteCounts.forEach(count => {
    count.textContent = quoteList.length;
  });

}


/* =========================================
   ADD PRODUCT
========================================= */

function addProductToQuote(productName){

  const quoteList = getQuoteList();

  if(!quoteList.includes(productName)){
    quoteList.push(productName);
    saveQuoteList(quoteList);
  }

  updateQuoteCount();
}


/* =========================================
   REMOVE PRODUCT
========================================= */

function removeProductFromQuote(productName){

  const updatedList = getQuoteList().filter(
    item => item !== productName
  );

  saveQuoteList(updatedList);
  updateQuoteCount();
}


/* =========================================
   FLYING ADD-TO-QUOTE ANIMATION
========================================= */

function playQuoteAnimation(button){

  const floatingQuote = document.querySelector('.floating-quote');

  if(!floatingQuote || !button) return;

  const start = button.getBoundingClientRect();
  const end = floatingQuote.getBoundingClientRect();

  const flyer = document.createElement('div');

  flyer.className = 'quote-flyer';
  flyer.textContent = '✓';

  flyer.style.position = 'fixed';
  flyer.style.left = `${start.left + start.width / 2}px`;
  flyer.style.top = `${start.top + start.height / 2}px`;
  flyer.style.zIndex = '99999';
  flyer.style.pointerEvents = 'none';

  document.body.appendChild(flyer);

  requestAnimationFrame(() => {

    flyer.style.transform =
      `translate(
        ${end.left + end.width / 2 - (start.left + start.width / 2)}px,
        ${end.top + end.height / 2 - (start.top + start.height / 2)}px
      ) scale(.4)`;

    flyer.style.opacity = '0';

  });

  setTimeout(() => {

    flyer.remove();

    floatingQuote.classList.remove('quote-pulse');

    void floatingQuote.offsetWidth;

    floatingQuote.classList.add('quote-pulse');

  }, 650);

}


/* =========================================
   PRODUCT DETAIL PAGE BUTTONS
========================================= */

function setupProductQuoteButtons(){

  const addButton = document.querySelector('.add-to-quote');
  const removeButton = document.querySelector('.remove-from-quote');

  if(!addButton) return;

  const productName = addButton.dataset.product;

  if(!productName) return;


  function updateButtons(){

    const quoteList = getQuoteList();
    const isAdded = quoteList.includes(productName);

    if(isAdded){

      addButton.textContent = '✓ ADDED TO QUOTE';
      addButton.classList.add('added');
      addButton.disabled = true;

      if(removeButton){
        removeButton.classList.add('show');
      }

    }else{

      addButton.textContent = 'ADD TO QUOTE';
      addButton.classList.remove('added');
      addButton.disabled = false;

      if(removeButton){
        removeButton.classList.remove('show');
      }

    }

  }


  addButton.addEventListener('click', () => {

    const quoteList = getQuoteList();

    if(quoteList.includes(productName)) return;

    addProductToQuote(productName);

    playQuoteAnimation(addButton);

    updateButtons();

  });


  if(removeButton){

    removeButton.addEventListener('click', () => {

      removeProductFromQuote(productName);

      updateButtons();

    });

  }


  updateButtons();

}


/* =========================================
   INITIALIZE
========================================= */

document.addEventListener('DOMContentLoaded', () => {

  updateQuoteCount();

  setupProductQuoteButtons();

});


window.addEventListener('storage', () => {

  updateQuoteCount();

});
