document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.navbar ul');

    toggleBtn.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });
});