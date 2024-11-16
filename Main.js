let menuIcon = document.querySelector('#menu-icon');
let Navbar = document.querySelector('.Navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    Navbar.classList.toggle('active')
}
let sections = document.querySelectorAll('section')
let NavLinks = document.querySelectorAll('header Nav a')

window.onscroll = () => {
    sections.forEach(sec => {
       let top = window.scrollY;
       let offset = sec.offsetTop - 150;
       let height = sec.offsetHeight;
       let id = sec.getAttribute('id')

       if(top >= offset && top < offset + height){
            NavLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header Nav a [href*=' + id + ' ]').classList.add('active');
            })
       }
    })
}
