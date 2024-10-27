

$('.slider-teste').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: true,
});


const btnAves = document.getElementById('btn-aves');
const btnMamiferos = document.getElementById('btn-mamiferos');
const btnRepteis = document.getElementById('btn-repteis');

const slideAves = document.getElementById('slide-aves');
const slideMamiferos = document.getElementById('slide-mamiferos');
const slideRepteis = document.getElementById('slide-repteis');

function mostrarSlide(selecionado) {
    slideAves.style.display = 'none';
    
    
    btnAves.classList.remove('active');
    btnMamiferos.classList.remove('active');
    btnRepteis.classList.remove('active');
    
    if (selecionado === 'aves') {
        slideMamiferos.style.display = 'none';
        slideRepteis.style.display = 'none';
        slideAves.style.display = 'block';
        btnAves.classList.add('active')
    } else if (selecionado === 'mamiferos'){
        slideAves.style.display = 'none';
        slideRepteis.style.display = 'none';
        slideMamiferos.style.display = 'block';
        btnMamiferos.classList.add('active');
    } else if (selecionado === 'repteis') {
        slideAves.style.display = 'none';
        slideRepteis.style.display = 'block';
        slideMamiferos.style.display = 'none';
        btnRepteis.classList.add('active');
    }
}

btnAves.addEventListener('click', () => mostrarSlide('aves'));
btnMamiferos.addEventListener('click', () => mostrarSlide('mamiferos'));
btnRepteis.addEventListener('click', () => mostrarSlide('repteis'));

mostrarSlide('aves');

const images = document.querySelectorAll('img[data-src]');

images.forEach(image => {
    image.classList.add('lazyload');
});


const hamburguer = document.querySelector(".hamburguer");
const menu = document.querySelector(".menu");

hamburguer.addEventListener("click", () =>
menu.classList.toggle("active"));