// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

//setting up variables for the nav-toggle button as well as each link
const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

//adding click events on navToggle
navToggle.addEventListener('click', function () {
  // console.log(links.classList);
  // console.log(links.classList.contains('links'));

  // if (links.classList.contains('show-links')) {
  //   links.classList.remove('show-links')
  // } else {
  //   links.classList.add('show-links')
  // }

  links.classList.toggle('show-links');
});