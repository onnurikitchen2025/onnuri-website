function getQuoteList(){
  return JSON.parse(localStorage.getItem('onnuriQuoteList')) || [];
}

function saveQuoteList(list){
  localStorage.setItem('onnuriQuoteList', JSON.stringify(list));
}

function updateQuoteCount(){
  const quoteCounts = document.querySelectorAll('.quote-count');
  const quoteList = getQuoteList();

  quoteCounts.forEach(count => {
    count.textContent = quoteList.length;
  });
}

function addProductToQuote(productName){
  const quoteList = getQuoteList();

  if(!quoteList.includes(productName)){
    quoteList.push(productName);
    saveQuoteList(quoteList);
  }

  updateQuoteCount();
}

function removeProductFromQuote(productName){
  const updatedList = getQuoteList().filter(
    item => item !== productName
  );

  saveQuoteList(updatedList);
  updateQuoteCount();
}

document.addEventListener('DOMContentLoaded', () => {
  updateQuoteCount();
});

window.addEventListener('storage', updateQuoteCount);
