
const mostrarMenu = function(navMenu, navBtn){
    const list = document.getElementById(navMenu);
    const btn = document.getElementById(navBtn);
    if(list && btn){
        btn.addEventListener("click", ()=>{
            list.classList.toggle("show");
        })
    }
}
mostrarMenu("nav-menu", "nav-btn");
const navLink = document.querySelectorAll('.nav-link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))