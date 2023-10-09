// program to reverse a string

function reverse(sentence) {
    // Split the sentence into words using space as a delimiter
    const words = sentence.split(' ');

    // Map each word to its reverse
    const reversedWords = words.map(word => reverseWord(word));

    // Join the reversed words back together into a sentence
    const reversedSentence = reversedWords.join(' ');

    return reversedSentence;
}

function reverseWord(word) {
    // Convert the word into an array of characters, reverse it, and join it back into a word
    return word.split('').reverse().join('');
}
// take input from the user
const string = prompt('Enter a string: ');
const reversed = reverse(string);
console.log(reversed); 
