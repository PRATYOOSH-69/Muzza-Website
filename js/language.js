// Language translations
const translations = {
    en: {
        "app-title": "Muzza",
        "app-description": "Your perfect Android music player",
        "description-header": "Description",
        "description": "Muzza is a modern music client based on YouTube Music API. Enjoy your favorite music without ads and subscriptions with beautiful interface and powerful features.",
        "features-header": "Key Features",
        "feature1": "🎵 Online and local music playback",
        "feature2": "🔗 Full sync with YouTube Music",
        "feature3": "🎨 Modern Material Design interface",
        "feature4": "🔁 Various playback modes",
        "feature5": "📁 Playlist and library management",
        "feature6": "🌙 Night mode and themes",
        "screenshots-header": "Screenshots",
        "download-text": "Download now",
        "developer-text": "Developed with ❤️",
        "developer-name": "Maloy-Android",
        "developer-github": "GitHub repository",
        "footer-text": "© 2024 Muzza. All rights reserved.",
        "language-label": "Language:"
    },
    ru: {
        "app-title": "Muzza",
        "app-description": "Ваш идеальный музыкальный плеер для Android",
        "description-header": "Описание",
        "description": "Muzza — это современный музыкальный клиент на основе YouTube Music API. Наслаждайтесь любимой музыкой без рекламы и подписок с красивым интерфейсом и мощными функциями.",
        "features-header": "Основные функции",
        "feature1": "🎵 Воспроизведение онлайн и локальных композиций",
        "feature2": "🔗 Полная синхронизация с YouTube Music",
        "feature3": "🎨 Современный Material Design интерфейс",
        "feature4": "🔁 Различные режимы воспроизведения",
        "feature5": "📁 Управление плейлистами и библиотекой",
        "feature6": "🌙 Ночной режим и темы оформления",
        "screenshots-header": "Скриншоты",
        "download-text": "Скачать сейчас",
        "developer-text": "Разработано с ❤️",
        "developer-name": "Maloy-Android",
        "developer-github": "GitHub репозиторий",
        "footer-text": "© 2024 Muzza. Все права защищены.",
        "language-label": "Язык:"
    }
};

// Initialize language
document.addEventListener('DOMContentLoaded', () => {
    const languageSelect = document.getElementById('language');
    
    // Load saved language preference or default to Russian
    const savedLanguage = localStorage.getItem('muzza-language') || 'ru';
    languageSelect.value = savedLanguage;
    changeLanguage(savedLanguage);
    
    // Add event listener for language change
    languageSelect.addEventListener('change', (e) => {
        const language = e.target.value;
        localStorage.setItem('muzza-language', language);
        changeLanguage(language);
    });
});

// Change language function
function changeLanguage(language) {
    const elements = document.querySelectorAll('[id]');
    
    elements.forEach(element => {
        const id = element.id;
        if (translations[language] && translations[language][id]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[language][id];
            } else {
                element.textContent = translations[language][id];
            }
        }
    });
                          }
