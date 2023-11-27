const btnmasvendidos = document.querySelector('#masvendidos');
const btnmasvalorados = document.querySelector('#masvalorados');
const btnmasrecientes = document.querySelector('#masrecientes');
const contenedormasvendios = document.querySelector('#contenedormasvendidos');
const contenedormasvalorados= document.querySelector('#contenedormasvalorados');
const contenedormasrecientes=document.querySelector('#contenedormasrecientes')

btnmasvendidos.addEventListener('click', () => {
    contenedormasvendios.classList.add('contenedor-masvendidos-out');
    contenedormasvalorados.classList.remove('contenedor-masvalorados-out')
    contenedormasrecientes.classList.remove('contenedor-masrecientes-out')
    btnmasvendidos.classList.add('active');
    btnmasvalorados.classList.remove('active');
    btnmasrecientes.classList.remove('active');
});

btnmasvalorados.addEventListener('click', () => {
    contenedormasrecientes.classList.remove('contenedor-masrecientes-out')
    contenedormasvendios.classList.remove('contenedor-masvendidos-out');
    contenedormasvalorados.classList.add('contenedor-masvalorados-out');
    btnmasvendidos.classList.remove('active');
    btnmasvalorados.classList.add('active');
    btnmasrecientes.classList.remove('active');
});

btnmasrecientes.addEventListener('click', () => {
    contenedormasrecientes.classList.add('contenedor-masrecientes-out')
    contenedormasvendios.classList.remove('contenedor-masvendidos-out');
    contenedormasvalorados.classList.remove('contenedor-masvalorados-out');
    btnmasvendidos.classList.remove('active');
    btnmasvalorados.classList.remove('active');
    btnmasrecientes.classList.add('active');
});


const toggleMenuElement= document.getElementById('toggle-menu');
const mainMenuElement= document.getElementById('menu-header');

toggleMenuElement.addEventListener('click' , () => {
    mainMenuElement.classList.toggle('menu-header--show');
});


