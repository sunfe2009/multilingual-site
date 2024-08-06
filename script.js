document.addEventListener('DOMContentLoaded', function() {
    const greetingElement = document.getElementById('greeting');

    const greetings = {
        'en': 'Finding partners around the world to team up and use Claude together',
        'zh': '在全世界寻找伙伴，一起组队使用 Claude',
        'ja': '世界中の仲間を見つけて、Claudeを一緒に使おう'
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
