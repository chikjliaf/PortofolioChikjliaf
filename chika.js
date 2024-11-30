const toggleIcon = document.getElementById('toggleMode');
toggleIcon.addEventListener('click', () => {
    document.body.classList.toggle('mode-gelap');
    if (document.body.classList.contains('mode-gelap')) {
        toggleIcon.classList.replace('bi-moon', 'bi-sun');
    } else {
        toggleIcon.classList.replace('bi-sun', 'bi-moon');
    }
});