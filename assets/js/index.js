let btn = document.querySelector('#btn');
let sidebar = document.querySelector('.sidebar');
let sidebar2 = document.querySelector('.sidebar').style.display='block';
let btn2 = document.querySelector('#btn-2');
let navlist = document.querySelector('ul li .nav-list');
let nav = document.querySelector('.navbar');
let content = document.querySelector('.home-content')

btn.addEventListener('click', function () {
    sidebar.classList.toggle('active')
})

btn2.addEventListener('click', function () {
    sidebar.classList.toggle('active');
})
