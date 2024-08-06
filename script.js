document.addEventListener('DOMContentLoaded', function() {
    const userLang = navigator.language || navigator.userLanguage;
    const greetingElement = document.getElementById('greeting');

    const greetings = {
        'en': 'Hello, World!',
        'zh': '你好，世界！',
        'ja': 'こんにちは、世界！'
    };

    let greeting = greetings['en']; // Default to English

    if (userLang.startsWith('zh')) {
        greeting = greetings['zh'];
    } else if (userLang.startsWith('ja')) {
        greeting = greetings['ja'];
    }

    greetingElement.textContent = greeting;
});
