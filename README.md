# Emojified.js

## Description:
The "Emojified.js" package allows you to express your emotions with emojis effortlessly. It takes a string as input and replaces certain keywords with corresponding emojis, adding a touch of fun and visual representation to your text.

## Installation:
```
npm install emojified.js
```

## Usage:
```javascript
const { emojified } = require('emojified');

console.log(emojified('Im so happy with the results!'));
// Output: "I'm so 😊 with the results!"

console.log(emojified('Feeling a bit sad today. Need a good laugh.'));
// Output: "Feeling a bit 😢 today. Need a good 😂."

console.log(emojified('This party is going to be fire!'));
// Output: "This 🎉 is going to be 🔥!"

console.log(emojified('I feel so cool with these new shades.'));
// Output: "I feel so 😎 with these new shades."
```
