document.querySelector('.nav__menu').addEventListener('click',()=>{
    const SVGMenu = document.querySelector('.nav__menu-img');
    const nav_items = document.querySelector('.nav__link-contain');

    nav_items.classList.toggle('nav__link-contain-active');
    SVGMenu.classList.toggle('nav__menu-img-blank');
})
