'use strick'

// find all elements with classes  '' 
const tabItem = document.querySelectorAll('.tabs__btn-item');
const tabContent = document.querySelectorAll('.tabs__content-item');

function removeClass(elementsList, classToRemove) {
  elementsList.forEach(function (element) {
    element.classList.remove(classToRemove);
  });
}

function addClass(className, classToAdd) {
  className.classList.add(classToAdd);
}



// apply function 'open' for each element from list by click
tabItem.forEach(function (element) {
  element.addEventListener('click', open);
});

// definition for function open
function open(evt) {
  const tabTarget = evt.currentTarget; // clicked button
  const buttonValue = tabTarget.dataset.button; // return value of data-button


  removeClass(tabItem, 'tabs__btn-item--active');
  removeClass(tabContent, 'tabs__content-item--active');
  // remove class by each element from lists tabItem and tabContent


  addClass(tabTarget, 'tabs__btn-item--active'); // add class to clicked 
  addClass(document.querySelector(`#${buttonValue}`), 'tabs__content-item--active');
  // find element by id (# = id) and add a class to this element 
};

const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('menu--active');
});
