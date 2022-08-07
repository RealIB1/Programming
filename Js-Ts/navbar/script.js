const barMenu = document.querySelector('.bars-menu')
const navMenu = document.querySelector('.nav-menu')
const navLink = document.querySelectorAll('.nav-link')

const toTop = document.getElementById('back-to-top')
let topSmooth = document.getElementById('top')


barMenu.addEventListener('click', mobileMenu);
navLink.forEach(n => n.addEventListener('click', closeMenu));


function mobileMenu() {
    barMenu.classList.toggle('active');
    navMenu.classList.toggle('active');
}

function closeMenu() {
    barMenu.classList.remove('active');
    navMenu.classList.remove('active');
}

window.addEventListener('scroll', backTop);
window.addEventListener('resize', backTop);


function backTop() {

    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
    })


}

function backTop() {
   if (window.scrollY >= 970) {
    toTop.classList.add('show');
   } else {
    toTop.classList.remove('show');
   }
}

toTop.addEventListener('click', function(e) {
    e.preventDefault();
    window.scroll({
        top: 0,
        left: 0,
        behavior:'smooth',
        transition: 'behavior 0.5s ease-in-out', 
    })

}, 1000);



// Animations for smooth transition on scroll

const contents = document.querySelectorAll('.content')
const imgs = document.querySelectorAll('.showcae')
const paragraphs = document.querySelectorAll('.para')

window.addEventListener('scroll', contentAnimate, imageAnimate, paragraphAnimate)

function contentAnimate() {
    const triggerAnimate = window.scrollY()
    
    contents.forEach(content => {
        contents = content.getBoundingClientRect().top
    })
}