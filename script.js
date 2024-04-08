document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    let currentCardIndex = 0; // Start with the first card visible

    // Function to update the visibility of cards
    function updateCards() {
        cards.forEach((card, index) => {
            card.style.display = index === currentCardIndex ? 'block' : 'none';
        });
    }

    // Initially display the first card
    updateCards();

    // Event listener for the "previous" button
    document.querySelector('.carousel-button.prev').addEventListener('click', () => {
        if (currentCardIndex > 0) {
            currentCardIndex--;
            updateCards();
        }
    });

    // Event listener for the "next" button
    document.querySelector('.carousel-button.next').addEventListener('click', () => {
        if (currentCardIndex < cards.length - 1) {
            currentCardIndex++;
            updateCards();
        }
    });
});
