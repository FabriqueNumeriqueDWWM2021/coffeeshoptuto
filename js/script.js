let navbar = document.querySelector('.navbar');
let menubtn = document.querySelector('#menu-btn');


menubtn.addEventListener ('click', () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
})

let searchForm = document.querySelector('.search-form');
let searchbtn = document.querySelector('#search-btn');

searchbtn.addEventListener ('click', () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
})

let cartItem = document.querySelector('.cart-items-container');
let cartbtn = document.querySelector('#cart-btn');

cartbtn.addEventListener ('click', () =>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
})

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}