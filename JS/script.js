let logIn = document.querySelector('.login-form');

document.querySelector('#login').onclick = () => {
    logIn.classList.toggle("active");
}

let menu = document.querySelector('#menu-bars');
let navi = document.querySelector('.navbar'); 


menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navi.classList.toggle('active');
}