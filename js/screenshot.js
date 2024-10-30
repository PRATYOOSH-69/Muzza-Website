const screenshots = [
    'img/screenshot1.jpg',
    'img/screenshot2.jpg',
    'img/screenshot3.jpg'
];
let currentIndex = 0;
let hammer;
let isModalOpen = false;

function openModal(index) {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    currentIndex = index;
    modalImg.src = screenshots[currentIndex];
    modal.classList.add('show');
    modal.style.display = 'flex';
    isModalOpen = true;
    setupSwipe();
}

function closeModal(event) {
    if (event) event.stopPropagation();
    if (!isModalOpen) return;
    const modal = document.getElementById('modal');
    modal.classList.remove('show');
    modal.style.opacity = '0';
    removeSwipe();
    setTimeout(() => {
        modal.style.display = 'none';
        isModalOpen = false;
    }, 300);
}

function setupSwipe() {
    const modal = document.getElementById('modal');
    hammer = new Hammer(modal);
    hammer.on('swipeleft', () => {
        if (currentIndex < screenshots.length - 1) {
            currentIndex++;
            changeImage(currentIndex);
        }
    });
    hammer.on('swiperight', () => {
        if (currentIndex > 0) {
            currentIndex--;
            changeImage(currentIndex);
        }
    });
}

function removeSwipe() {
    if (hammer) {
        hammer.off('swipeleft');
        hammer.off('swiperight');
        hammer.destroy();
        hammer = null;
    }
}

function highlightFeature(featureElement) {
    const features = document.querySelectorAll('.features li');
    features.forEach(feature => {
        feature.classList.remove('highlighted');
    });

    featureElement.classList.add('highlighted');
}


function changeImage(index) {
    const modalImg = document.getElementById('modal-img');
    modalImg.src = screenshots[index];
}
