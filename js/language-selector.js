function changeLanguage() {
    const language = document.getElementById('language').value;
    if (language === 'en') {
        document.getElementById('app-title').innerText = 'Muzza';
        document.getElementById('app-description').innerText = 'Your perfect music player for Android!';
        document.getElementById('language-label').innerText = 'Select Language:';
        document.getElementById('description-header').innerText = 'Description';
        document.getElementById('description').innerText = 'A music client based on the YouTube Music API. It will unleash your love for music without ads and subscriptions!';
        document.getElementById('features-header').innerText = 'Main Features';
        document.getElementById('feature1').innerText = 'Ability to play both online and local tracks';
        document.getElementById('feature2').innerText = 'Full synchronization with YouTube Music';
        document.getElementById('feature3').innerText = 'Modern and attractive design';
        document.getElementById('feature4').innerText = 'Various playback modes: random, repeat, and sequential';
        document.getElementById('screenshots-header').innerText = 'Screenshots';
        document.getElementById('developer-header').innerText = 'Developer';
        document.getElementById('download-btn').innerText = 'Download';
        document.getElementById('footer-text').innerText = '© 2024 Muzza. All rights reserved.';
        document.getElementById('language').value = 'en';
    } else {
        document.getElementById('app-title').innerText = 'Muzza';
        document.getElementById('app-description').innerText = 'Ваш идеальный музыкальный плеер для Android!';
        document.getElementById('language-label').innerText = 'Выберите язык:';
        document.getElementById('description-header').innerText = 'Описание';
        document.getElementById('description').innerText = 'Музыкальный клиент на основе API YouTube Music. Он раскроет вашу любовь к музыке на полную катушку без рекламы и подписок!';
        document.getElementById('features-header').innerText = 'Основные функции';
        document.getElementById('feature1').innerText = 'Возможность воспроизведения как онлайн, так и локальных композиций';
        document.getElementById('feature2').innerText = 'Полная синхронизация с YouTube Music';
        document.getElementById('feature3').innerText = 'Современный и привлекательный дизайн';
        document.getElementById('feature4').innerText = 'Разнообразные режимы воспроизведения: случайный, повтор и последовательный';
        document.getElementById('screenshots-header').innerText = 'Скриншоты';
        document.getElementById('developer-header').innerText = 'Разработчик';
        document.getElementById('download-btn').innerText = 'Скачать';
        document.getElementById('footer-text').innerText = '© 2024 Muzza. Все права защищены.';
        document.getElementById('language').value = 'ru';
    }
}
