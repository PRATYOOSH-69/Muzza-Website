// Modal functionality
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const closeBtn = document.querySelector('.close-btn');
    const screenshots = document.querySelectorAll('.screenshot');
    
    // Open modal when clicking on screenshot
    screenshots.forEach(screenshot => {
        screenshot.addEventListener('click', () => {
            modalImg.src = screenshot.src;
            modalImg.alt = screenshot.alt;
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });
    
    // Close modal
    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
    
    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Initialize Hammer.js for swipe gestures
    if (modal) {
        const hammer = new Hammer(modal);
        hammer.on('swipeleft', () => navigateScreenshot(1));
        hammer.on('swiperight', () => navigateScreenshot(-1));
    }
});

// Screenshot navigation
function navigateScreenshot(direction) {
    const screenshots = Array.from(document.querySelectorAll('.screenshot'));
    const modalImg = document.getElementById('modal-img');
    const currentIndex = screenshots.findIndex(img => img.src === modalImg.src);
    
    if (currentIndex !== -1) {
        let newIndex = currentIndex + direction;
        
        // Wrap around if at beginning or end
        if (newIndex < 0) newIndex = screenshots.length - 1;
        if (newIndex >= screenshots.length) newIndex = 0;
        
        modalImg.src = screenshots[newIndex].src;
        modalImg.alt = screenshots[newIndex].alt;
    }
}
