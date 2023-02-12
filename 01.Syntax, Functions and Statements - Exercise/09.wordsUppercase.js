function wordsUppercase(text) {
    let regex = /\w+/g;
    let result = text.match(regex);
    console.log(result.join(", ").toUpperCase());
}

wordsUppercase('Hi, how are you?');
wordsUppercase('hello');