# Emojify

## Description:
The "Emojify" package allows you to express your emotions with emojis effortlessly. It takes a string as input and replaces certain keywords or phrases with corresponding emojis, adding a touch of fun and visual representation to your text.

## Installation:
```
npm install emojify
```

## Usage:
```javascript
const { emojify } = require('emojify');

console.log(emojify('Im so happy with the results!'));
// Output: "I'm so 😊 with the results!"

console.log(emojify('Feeling a bit sad today. Need a good laugh.'));
// Output: "Feeling a bit 😢 today. Need a good 😂."

console.log(emojify('This party is going to be fire!'));
// Output: "This 🎉 is going to be 🔥!"

console.log(emojify('I feel so cool with these new shades.'));
// Output: "I feel so 😎 with these new shades."
```
