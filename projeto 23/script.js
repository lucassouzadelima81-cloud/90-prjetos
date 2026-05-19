const openBtn = document.getElementById('openSearch');
const closeBtn = document.getElementById('closeSearch');
const overlay = document.getElementById('searchOverlay');
const input = document.getElementById('searchInput');

openBtn.addEventListener('click', () => { 
    overlay.classList.add('active');
    setTimeout(() => input.focus(), 400); // Foca no input após abrir
});

closeBtn.addEventListener('click', () => {
    overlay.classList.remove('active');
});