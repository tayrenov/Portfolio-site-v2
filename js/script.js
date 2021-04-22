'use stritch';

document.addEventListener('DOMContentLoaded', () => {   

/***BURGER_MENU */

    const burgerMenuBlock = document.querySelector('.header-burger'),
          mainMenu = document.querySelector('.header__main-menu');

    burgerMenuBlock.addEventListener('click', ()=> {

        burgerMenuBlock.classList.toggle('icon-active');
        mainMenu.classList.toggle('menu-active');
    });

    mainMenu.addEventListener('click', () => {
        if (mainMenu.classList.value == 'header__main-menu menu-active') {
            burgerMenuBlock.classList.remove('icon-active');
            mainMenu.classList.remove('menu-active');
        }
    });

});