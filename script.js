const apiKey = "";
const apiUrl = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=" + apiKey;

const translatableElements = {
    'site-title': document.querySelector('[data-lang="site-title"]'),
    'site-name': document.querySelector('[data-lang="site-name"]'),
    'welcome-title': document.querySelector('[data-lang="welcome-title"]'),
    'welcome-message': document.querySelector('[data-lang="welcome-message"]'),
    'open-chatbot-text': document.querySelector('[data-lang="open-chatbot-text"]'),
    'chatbot-title': document.querySelector('[data-lang="chatbot-title"]'),
    'back-to-site': document.querySelector('[data-lang="back-to-site"]'),
    'assistant-name': document.querySelector('[data-lang="assistant-name"]'),
    'welcome-message-chat': document.querySelector('[data-lang="welcome-message-chat"]'),
    'input-placeholder': document.querySelector('[data-lang="input-placeholder"]')
};

const staticTranslations = {
    'site-title': {
        en: "AI Assistant", hi: "एआई सहायक", bn: "এআই সহকারী", ta: "AI உதவியாளர்", te: "AI సహాయకుడు", pa: "ਏਆਈ ਸਹਾਇਕ", ur: "اے آئی معاون", mr: "एआय सहाय्यक", gu: "AI સહાયક", kn: "AI ಸಹಾಯಕ", ml: "AI സഹായി"
    },
    'site-name': {
        en: "My Website", hi: "मेरी वेबसाइट", bn: "আমার ওয়েবসাইট", ta: "எனது வலைத்தளம்", te: "నా వెబ్‌సైట్", pa: "ਮੇਰੀ ਵੈੱਬਸਾਈਟ", ur: "میری ویب سائٹ", mr: "माझी वेबसाइट", gu: "મારી વેબસાઇટ", kn: "ನನ್ನ ವೆಬ್‌ಸೈಟ್", ml: "എന്റെ വെಬ್സൈറ്റ്"
    },
    'welcome-title': {
        en: "Welcome to Our Village Helper!", hi: "हमारे ग्राम सहायक में आपका स्वागत है!", bn: "আমাদের গ্রামের সহায়ক-এ স্বাগতম!", ta: "எங்கள் கிராம உதவியாளருக்கு வருக!", te: "మా గ్రామ సహాయకుడికి స్వాగతం!", pa: "ਸਾਡੇ ਪਿੰਡ ਦੇ ਸਹਾਇਕ ਵਿੱਚ ਤੁਹਾਡਾ ਸੁਆਗਤ ਹੈ!", ur: "ہمارے گاؤں کے مددگار میں خوش آمدید!", mr: "आमच्या गावच्या मदतनीसाचे स्वागत आहे!", gu: "અમારા ગામના સહાયકમાં આપનું સ્વાગત છે!", kn: "ನಮ್ಮ ಗ್ರಾಮದ ಸಹಾಯಕನಿಗೆ ಸ್ವಾಗತ!", ml: "ഞങ്ങളുടെ ഗ്രാമ സഹായകൻ-ലേക്ക് സ്വാഗതം!"
    },
    'welcome-message': {
        en: "I am here to help you. Click the button to ask me anything in your language.", hi: "मैं आपकी मदद के लिए यहाँ हूँ। अपनी भाषा में कुछ भी पूछने के लिए बटन पर क्लिक करें।", bn: "আমি আপনাকে সাহায্য করার জন্য এখানে আছি। আপনার ভাষায় কিছু জিজ্ঞাসা করতে বোতামে ক্লিক করুন।", ta: "நான் உங்களுக்கு உதவ இங்கே இருக்கிறேன். உங்கள் மொழியில் எதையும் கேட்க பொத்தானைக் கிளிக் செய்யவும்।", te: "నేను మీకు సహాయం చేయడానికి ఇక్కడ ఉన్నాను. మీ భాషలో ఏదైనా అడగడానికి బటన్‌ను క్లిక్ చేయండి।", pa: "ਮੈਂ ਤੁਹਾਡੀ ਮਦਦ ਲਈ ਇੱਥੇ ਹਾਂ। ਆਪਣੀ ਭਾਸ਼ਾ ਵਿੱਚ ਕੁਝ ਵੀ ਪੁੱਛਣ ਲਈ ਬਟਨ 'ਤੇ ਕਲਿੱਕ ਕਰੋ।", ur: "میں آپ کی مدد کے لیے یہاں ہوں۔ اپنی زبان میں کچھ بھی پوچھنے کے لیے بٹن پر کلک کریں۔", mr: "मी तुम्हाला मदत करण्यासाठी येथे आहे. तुमच्या भाषेत काहीही विचारण्यासाठी बटणावर क्लिक करा.", gu: "હું તમને મદદ કરવા માટે અહીં છું. તમારી ભાષામાં કંઈપણ પૂછવા માટે બટન પર ક્લિક કરો.", kn: "ನಾನು ನಿಮಗೆ ಸಹಾಯ ಮಾಡಲು ಇಲ್ಲಿದ್ದೇನೆ. ನಿಮ್ಮ ಭಾಷೆಯಲ್ಲಿ ಏನಾದರೂ ಕೇಳಲು ಬಟನ್ ಅನ್ನು ಕ್ಲಿಕ್ ಮಾಡಿ.", ml: "ഞങ്ങളുടെ ഗ്രാമ സഹായകൻ-ലേക്ക് സ്വാഗതം!"
    },
    'open-chatbot-text': {
        en: "Start Conversation", hi: "बातचीत शुरू करें", bn: "কথোপকথন শুরু করুন", ta: "உரையாடலைத் தொடங்கு", te: "సంభాషణ ప్రారంభించండి", pa: "ਗੱਲਬਾਤ ਸ਼ੁਰੂ ਕਰੋ", ur: "گفتگو شروع کریں", mr: "संभाषण सुरू करा", gu: "વાતચીત શરૂ કરો", kn: "ಸಂಭಾಷಣೆಯನ್ನು ಪ್ರಾರಂಭಿಸಿ", ml: "സംഭാഷണം ആരംഭിക്കുക"
    },
    'chatbot-title': {
        en: "Chatbot", hi: "चैटबॉट", bn: "চ্যাটবট", ta: "சாட்போட்", te: "చాట్‌బాట్", pa: "ਚੈਟਬੋਟ", ur: "چیٹ بوٹ", mr: "चॅटबॉट", gu: "ચેટબોટ", kn: "ಚಾಟ್ಬಾಟ್", ml: "ചാറ്റ്ബോട്ട്"
    },
    'back-to-site': {
        en: "Back", hi: "वापस", bn: "ফিরে যান", ta: "திரும்பிச் செல்", te: "వెనుకకు", pa: "ਵਾਪਸ", ur: "پیچھے", mr: "मागे", gu: "પાછા", kn: "ಹಿಂದಕ್ಕೆ", ml: "പുറകിലേക്ക്"
    },
    'assistant-name': {
        en: "Village Helper", hi: "ग्राम सहायक", bn: "গ্রামের সহায়ক", ta: "கிராம உதவியாளர்", te: "గ్రామ సహాయకుడు", pa: "ਪਿੰਡ ਦੇ ਸਹਾਇਕ", ur: "گاؤں کا مددگار", mr: "गावचा मदतनीस", gu: "ગામનો સહાયક", kn: "ಗ್ರಾಮದ ಸಹಾಯಕ", ml: "ഗ്രാമ സഹായകൻ"
    },
    'welcome-message-chat': {
        en: "Hello! How can I help you today?", hi: "नमस्ते! मैं आज आपकी कैसे मदद कर सकता हूँ?", bn: "হ্যালো! আমি আজ আপনাকে কীভাবে সাহায্য করতে পারি?", ta: "வணக்கம்! இன்று நான் உங்களுக்கு எப்படி உதவ முடியும்?", te: "నమస్కారం! ఈ రోజు నేను మీకు ఎలా సహాయపడగలను?", pa: "ਨਮਸਤੇ! ਮੈਂ ਅੱਜ ਤੁਹਾਡੀ ਕਿਵੇਂ ਮਦਦ ਕਰ ਸਕਦਾ ਹਾਂ?", ur: "السلام علیکم! میں آج آپ کی کیسے مدد کر سکتا ہوں؟", mr: "नमस्कार! मी आज तुमची कशी मदत करू शकेन?", gu: "નમસ્કાર! હું આજે તમને કેવી રીતે મદદ કરી શકું?", kn: "ನಮಸ್ಕಾರ! ಇಂದು ನಾನು ನಿಮಗೆ ಹೇಗೆ ಸಹಾಯ ಮಾಡಬಲ್ಲೆ?", ml: "നമസ്കാരം! ഇന്ന് ഞാൻ നിങ്ങളെ എങ്ങനെ സഹായിക്കും?"
    },
    'input-placeholder': {
        en: "Ask a question...", hi: "एक प्रश्न पूछें...", bn: "একটি প্রশ্ন জিজ্ঞাসা করুন...", ta: "ஒரு கேள்வியைக் கேட்கவும்...", te: "ఒక ప్రశ్న అಡగండి...", pa: "ਇੱਕ ਸਵਾਲ ਪੁੱਛੋ...", ur: "ایک سوال پوچھیں...", mr: "एक प्रश्न विचारा...", gu: "એક પ્રશ્ન પૂછો...", kn: "ಒಂದು ಪ್ರಶ್ನೆ ಕೇಳಿ...", ml: "ഒരു ചോദ്യം ചോദിക്കുക..."
    }
};

const languageMap = {
    'en': 'English',
    'hi': 'Hindi',
    'bn': 'Bengali',
    'ta': 'Tamil',
    'te': 'Telugu',
    'pa': 'Punjabi',
    'ur': 'Urdu',
    'mr': 'Marathi',
    'gu': 'Gujarati',
    'kn': 'Kannada',
    'ml': 'Malayalam'
};

// Function to fetch a translation from the Gemini API
async function translateText(text, targetLang) {
    try {
        const prompt = `Translate the following text into ${languageMap[targetLang]}. Provide only the translated text and nothing else. Do not include any extra sentences or greetings. Text to translate: '${text}'`;
        
        const payload = {
            contents: [{ parts: [{ text: prompt }] }],
            systemInstruction: {
                parts: [{ text: "You are a highly accurate translation API. Only return the translated text." }]
            },
        };

        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const result = await response.json();
        const translatedText = result.candidates?.[0]?.content?.parts?.[0]?.text;
        return translatedText || text; // Fallback to original text if translation fails
    } catch (error) {
        console.error("Translation API error:", error);
        return text; // Fallback to original text
    }
}

async function updateText(lang) {
    // Update static content from the pre-defined translations object
    for (const key in staticTranslations) {
        if (translatableElements[key] && staticTranslations[key][lang]) {
            if (translatableElements[key].tagName === 'INPUT' && translatableElements[key].hasAttribute('placeholder')) {
                translatableElements[key].setAttribute('placeholder', staticTranslations[key][lang]);
            } else {
                translatableElements[key].textContent = staticTranslations[key][lang];
            }
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const langSelector = document.getElementById('language-selector');

    const storedLang = localStorage.getItem('selected-language') || 'en';
    langSelector.value = storedLang;
    updateText(storedLang);

    langSelector.addEventListener('change', (event) => {
        const newLang = event.target.value;
        localStorage.setItem('selected-language', newLang);
        updateText(newLang);
    });
});
