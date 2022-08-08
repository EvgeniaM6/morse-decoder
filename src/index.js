const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
    let arr = []
    for (let i = 0; i < expr.length; i += 10) {
        arr.push(expr.slice(i, i + 10))
    }

    let lettersArr = arr.map((item) => {
        if (item.includes('*')) {
            return ' '
        } else {
            let oneBitLetterArr = []
            for (let i = 0; i < item.length; i += 2) {
                oneBitLetterArr.push(item.slice(i, i + 2))
            }

            let oneMorseLetterArr = oneBitLetterArr.map((item) => {
                return decodeBitsToMorse(item)
            })

            let oneMorseLetter = oneMorseLetterArr.join('')
            let decodedLetter = decodeMorseToWord(oneMorseLetter)
            return decodedLetter
        }
    })

    return lettersArr.join('')
}

function decodeBitsToMorse(str) {
    switch (str) {
        case '00': return '';
        case '10': return '.';
        case '11': return '-';
    }
}

function decodeMorseToWord(str) {
    return MORSE_TABLE[str]
}

module.exports = {
    decode
}