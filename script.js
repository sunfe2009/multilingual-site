document.addEventListener('DOMContentLoaded', function() {
    const greetingElement = document.getElementById('greeting');

    const greetings = {
        'en': 'Hello, World!',
        'zh': '你好，世界！',
        'ja': 'こんにちは、世界！'
    };

    function setGreeting(lang) {
        greetingElement.textContent = greetings[lang] || greetings['en'];
    }

    function detectLanguage() {
        const userLang = navigator.language || navigator.userLanguage;
        if (userLang.startsWith('zh')) {
            return 'zh';
        } else if (userLang.startsWith('ja')) {
            return 'ja';
        } else {
            return 'en';
        }
    }

    // Set initial greeting based on detected language
    setGreeting(detectLanguage());

    // Make setGreeting available globally
    window.setLanguage = setGreeting;
});
