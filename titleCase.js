function titleCase(str) {
    let words = str.split(' ');
    let new_str = '';
    for (let word of words) {
        let new_word = word[0].toUpperCase() + word.slice(1).toLowerCase();
        if (new_str === '') {
            new_str = new_str + new_word;
        } else {
            new_str = new_str + ' ' + new_word;
        }
    }
    return new_str;
}

titleCase("I'm a little tea pot");