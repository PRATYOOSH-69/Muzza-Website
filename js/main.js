// Main functionality
document.addEventListener('DOMContentLoaded', () => {
    // Highlight feature on click
    const features = document.querySelectorAll('.features li');
    features.forEach(feature => {
        feature.addEventListener('click', () => {
            feature.classList.add('highlight');
            setTimeout(() => {
                feature.classList.remove('highlight');
            }, 1500);
        });
    });
    
    // Add any other global functionality here
});
