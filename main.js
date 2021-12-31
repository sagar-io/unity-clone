const tab = document.querySelectorAll('.tab');
const tab_container = document.querySelector('.tab-section');

const hamburger = document.querySelector('#m-menu-bar');
const hamburgerItem =  document.querySelector('.m-menu-items');

const dot = document.querySelectorAll('.dot');

const searchPopup = document.querySelector('#search-popup');

const openModalButton = document.querySelectorAll('[data-modal-target]');
const closeModalButton = document.querySelectorAll('[data-modal-close]');
const overlay = document.getElementById('overlay-body');


function handleTab(e) {
    removeHighlight();
    this.classList.add('active');
    switch(this.id){
        case 'tab-1' :
          tab_container.style.background = `url("tab-cover-1.jpg")`;
        break;
        case 'tab-2' : 
          tab_container.style.background = `url("tab-cover-2.jpg")`;
        break;
        case 'tab-3' : 
          tab_container.style.background = `url("tab-cover-3.jpg")`;
    }
}
function removeHighlight() {
    tab.forEach(item => item.classList.remove('active'));
}

function displayMenu() {
    if(hamburgerItem.style.display === 'initial'){
         hamburgerItem.style.display = 'none';
    }
    else{
      hamburgerItem.style.display = 'initial';
    }
  }

  function handleDot(e) {
     hideAllSlide();
    
         let numSlide = e.target.classList[1][4];
         tab[`${numSlide - 1}`].style.display ='initial';


     switch(`tab-${numSlide}`){
      case 'tab-1' :
        tab_container.style.background = `url("tab-cover-1.jpg")`;
      break;
      case 'tab-2' : 
        tab_container.style.background = `url("tab-cover-2.jpg")`;
      break;
      case 'tab-3' : 
        tab_container.style.background = `url("tab-cover-3.jpg")`;
  }

    this.style.backgroundColor = 'white';
  }

  function hideAllSlide() {
     tab.forEach(item => item.style.display = 'none');
     dot.forEach(item => item.style.backgroundColor = 'transparent');
  }

  
  // Popup functionality -

  function openModal(modal){
    if(modal == null) return;
    modal.classList.add('activate');
    overlay.classList.add('activate');
  }
  
  function closeModal(modal){
    if(modal == null) return;
    modal.classList.remove('activate');
    overlay.classList.remove('activate');
    
  }
 
  openModalButton.forEach(item =>{
    item.addEventListener('click', () => {
       const modal  = document.querySelector(item.dataset.modalTarget);
       openModal(modal);
    })
  });
  
  closeModalButton.forEach(item =>{
    item.addEventListener('click', () => {
       const modal  = item.closest('.modal');
       closeModal(modal);
    })
  });

  overlay.addEventListener('click' , () =>{
      const modals = document.querySelectorAll('.modal.activate');
      modals.forEach(modal => closeModal(modal));
  });

tab.forEach(item => item.addEventListener('mouseover',handleTab));
dot.forEach(item => item.addEventListener('click', handleDot));

hamburger.addEventListener("click", displayMenu);





// Search List filter --------------------------------------------------->

const searchInput = document.getElementById('main-search');
const domGamesList = document.querySelectorAll('.search-showcase li a');
const domGamesListContainer = document.querySelector('.search-showcase ul');
const gamesList = [];
let filterArr = [];

domGamesList.forEach( item => gamesList.push(item.innerText));

function filterList(e) {
  let text = e.target.value.toUpperCase();

  filterArr = gamesList.filter( arrItem => arrItem.toUpperCase().includes(text));
 
  domGamesListContainer.innerHTML = '';

  filterArr.forEach(item => {
    domGamesListContainer.innerHTML += `<li><a href="https://en.wikipedia.org/wiki/List_of_Unity_games" target="_blank">${item}</a></li>`
  });
  

}

searchInput.addEventListener('input',(ev) => {
  filterList(ev);
});
