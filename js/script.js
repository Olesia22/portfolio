const hamburger = document.querySelector('.humburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

const counters = document.querySelectorAll('.prodressive__num'),
      lines = document.querySelectorAll('.progressive__score .progressive__score-total');

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});