function checkInput(event) {
    const forbiddenWords = ['@', '=']; // Add your list of forbidden words here
    const inputText = event.target.value.toLowerCase();
    for (const word of forbiddenWords) {
        if (inputText.includes(word)) {
            event.target.value = event.target.value.replace(new RegExp(word, 'gi'), '*'.repeat(word.length)); // Replace the forbidden word with asterisks
            alert(`The word "${word}" is not allowed.`);
            return false;
        }
    }
    const words = inputText.split(' ');
    for (let i = 0; i < words.length; i++) {
        if (words[i].split('').filter(char => char !== ' ').length > 4) {
            words[i] = '*'.repeat(words[i].length);
            alert(`The word "${words[i]}" is too long.`);
        }
    }
    event.target.value = words.join(' ');
}


function checkInput(event) {
    const forbiddenWords = ['@', '=']; // Add your list of forbidden words here
    const maxLength = 4; // Set the maximum length of words here
    const words = event.target.value.toLowerCase().split(' ').map(word => {
        if (forbiddenWords.includes(word)) {
            alert(`The word "${word}" is not allowed.`);
            return '*'.repeat(word.length); // Replace the forbidden word with asterisks
        }
        if (word.length > maxLength) {
            alert(`The word "${word}" is too long.`);
            return '*'.repeat(word.length); // Replace the long word with asterisks
        }
        return word;
    });
    event.target.value = words.join(' ');
}
