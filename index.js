const emojiMappings = {
    love: "❤️",
    gift: "🎁",
    party: "🎉",
    happy: "😊",
    sad: "😢",
    laugh: "😂",
    fire: "🔥",
    star: "⭐️",
    baloon: "🎈",
    cool: "😎",
    angel: "😇",
    nerd: "🤓",
    sleepy: "😴",
    hungry: "🍔",
    money: "💰",
    clock: "⏰",
    music: "🎵",
    book: "📚",
    rainbow: "🌈",
    moon: "🌙",
    globe: "🌍",
    rocket: "🚀",
    computer: "💻",
    car: "🚗",
    airplane: "✈️",
    umbrella: "☔️",
    camera: "📷",
    soccer: "⚽️",
    basketball: "🏀",
    baseball: "⚾️",
    tennis: "🎾",
    golf: "⛳️",
    cookie: "🍪",
    pizza: "🍕",
    hamburger: "🍔",
    taco: "🌮",
    burrito: "🌯",
    sushi: "🍣",
    beer: "🍺",
    wine: "🍷",
};

function emojify(text) {
    let emojifiedText = text;

    for (const keyword in emojiMappings) {
        const emoji = emojiMappings[keyword];
        const regex = new RegExp(`\\b${keyword}\\b`, 'gi');
        emojifiedText = emojifiedText.replace(regex, emoji);
    }

    return emojifiedText;
}

module.exports = {
    emojify
};