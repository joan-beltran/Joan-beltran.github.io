const toggleMenuElement= document.getElementById('toggle-menu');
const mainMenuElement= document.getElementById('menu-header');

toggleMenuElement.addEventListener('click' , () => {
    mainMenuElement.classList.toggle('menu-header--show');
});