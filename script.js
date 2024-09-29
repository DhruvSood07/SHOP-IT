// // script.js
// document.addEventListener('DOMContentLoaded', function() {
//     const links = document.querySelectorAll('nav ul li a');
//     links.forEach(link => {
//       if (link.href === window.location.href) {
//         link.style.color = 'yellow'; // Highlight active link
//       }
//     });
//   });

const bar = document.getElementById('bar');
const nav= document.getElementById('navbar');
const close= document.getElementById('close');

if (bar) {
    bar.addEventListener('click', ()=>{
        nav.classList.add('acitve');
    })
}
if (close) {
    close.addEventListener('click', ()=>{
        nav.classList.remove('acitve');
    })
}



