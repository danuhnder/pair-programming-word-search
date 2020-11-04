const transpose = require('../../d2/matrix_transpositions')

const wordSearch = (letters, word) => { 
    if (word === ''){
        return undefined;
    }
    const targetWord = word.toUpperCase();
    const originalArray = letters;
    const transposedArray = transpose(letters);

    const wordFinder = function(arr, str){
        const arrayAsString = arr.map(ls => ls.join(''));
        for (l of arrayAsString) {
            let l2 = l.split('').reverse().join('');
            if (l.includes(str) || l2.includes(str)) {
                return true
            };
        };
        return false
    };

    if (wordFinder(originalArray, targetWord) || wordFinder(transposedArray, targetWord)) {
        return true;
    } else {
        return false;
    }
}



module.exports = wordSearch

