// Van deze site: https://css-tricks.com/snippets/jquery/add-active-navigation-class-based-on-url/
// Eigen gemaakt want dit was JQuery
function classActive() {
  document
    .querySelector('nav a[href^="/' + location.pathname.split('/')[1] + '"]')
    .classList.add('active');
}

console.log(classActive());
