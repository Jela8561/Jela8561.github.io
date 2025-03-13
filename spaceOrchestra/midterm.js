document.querySelectorAll('.concert-card').forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('flip');
    });
});
