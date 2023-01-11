var navbar = document.querySelector(".navbar");
let menu = document.querySelector('#menu');
let menuBar = document.querySelector('.menuBar')
let logopic = document.querySelector ('.logoimg img')

document.addEventListener('scroll',()=> {
    var scroll_position = window.scrollY;
    if (scroll_position > 150) {
        navbar.style.backgroundColor='black';
    } else {
        navbar.style.backgroundColor='transparent'
    }
    if (scroll_position > 150) {
        logopic.style.display="none"
    }
    else {
        logopic.style.display="block"
    }
});
  
let cookiebox = document.getElementById("cookiebox");
var acceptCookies = document.getElementById("cookieAcceptBtn");

acceptCookies.onclick = function(){
    cookiebox.style.display="none";
}

// To bring the menu bar in!
menu.addEventListener('click',()=>{
    if (logopic.style.display="none"){
        logopic.style.display="block";
    }
    else {

    }
    
    menuBar.classList.toggle('active');
    navbar.style.backgroundColor="black";
})

var x = window.matchMedia("(max-width: 700px)")

function myFunction(x){
    if (x.matches){
        if (scroll_position > 150){
            logoimg.style.display ="none";
        }
    }
}