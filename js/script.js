/*====================== menu icon navbar ==========================*/
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// Define sections and navLinks variables
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

// Attach scroll event listener
window.addEventListener('scroll', () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        let selector = `header nav a[href="#${id}"]`;

        if (top >= offset && top < offset + height) {
            // Remove 'active' class from all navLinks
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            // Add 'active' class to the corresponding navLink
            document.querySelector(`header nav a[href="#${id}"]`).classList.add('active');
        }
    });
});

// sticky narvbar
window.onscroll = () =>{

let header = document.querySelector('.header');

header.classList.toggle('sticky', window.scrollY > 100);

menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');
}

let darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.onclick = () =>{
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
}

ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img img, .services-container, .portfolio-box, .contact form',   { origin: 'bottom' });

//modal education
{
const btn = document.querySelector('.js-education-button');
const modal = document.querySelector('.js-modal');
const modalClose = document.querySelectorAll('.js-close');
const modalContainer = document.querySelector('.js-modal-container');

function showSpecificEducation(){
    modal.classList.add('open');
}

function hideSpecificEducation(){
    modal.classList.remove('open');
}

for(const close of modalClose){
    close.addEventListener('click', hideSpecificEducation);
}

modal.addEventListener('click', hideSpecificEducation);
btn.addEventListener('click', showSpecificEducation);
modalContainer.addEventListener('click', function(event){
            event.stopPropagation()
        })
}

//modal project 
document.querySelectorAll('.js-modal-open-project').forEach(function(btn, index) {
    btn.addEventListener('click', function() {
        let classNames = Array.from(btn.classList);
        let className = classNames[classNames.length - 1];
        let modal = document.querySelector('.modal-project' + '.' + className);
        
        modal.classList.add('open');
    });
});

document.querySelectorAll('.js-close-project').forEach(function(btn){
    btn.addEventListener('click', function(){
        let classNames = Array.from(btn.classList);
        let className = classNames[classNames.length - 1];
        let modalRemoved = document.querySelector('.modal-project' + '.' + className);

        modalRemoved.classList.remove('open'); 
    })
})

document.querySelectorAll('.js-modal-project').forEach((modal) =>{
    modal.addEventListener('click', ()=>{
        modal.classList.remove('open');
    })
})

document.querySelectorAll('.js-modal-container-project').forEach((modalContainer) =>{
    modalContainer.addEventListener('click', (event)=>{
        event.stopPropagation();
    })
})
    




