const gridItems = document.querySelectorAll('.grid-item');

gridItems.forEach(item => {
    item.addEventListener('mouseleave', function() {
        this.classList.add('permanent');
    });
});