document.addEventListener("DOMContentLoaded", function () {
    // Select the navbar and menu icon elements
    const navbar = document.querySelector('.navigation');
    const menuIcons = document.querySelector('.menu-icons');

    // Toggle navbar visibility on click
    menuIcons.addEventListener('click', function () {
        navbar.classList.toggle('active');
    });

});