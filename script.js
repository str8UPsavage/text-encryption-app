function encryptText() {
    const text = document.getElementById('inputText').value;
    const key = document.getElementById('key').value;
    const algorithm = document.getElementById('algorithm').value;

    let result = '';
    if (algorithm === 'caesar') {
        result = caesarEncrypt(text, key);
    } else if (algorithm === 'vigenere') {
        result = vigenereEncrypt(text, key);
    } else if (algorithm === 'xor') {
        result = xorEncrypt(text, key);
    }

    document.getElementById('outputText').value = result;
}

function decryptText() {
    const text = document.getElementById('inputText').value;
    const key = document.getElementById('key').value;
    const algorithm = document.getElementById('algorithm').value;

    let result = '';
    if (algorithm === 'caesar') {
        result = caesarDecrypt(text, key);
    } else if (algorithm === 'vigenere') {
        result = vigenereDecrypt(text, key);
    } else if (algorithm === 'xor') {
        result = xorDecrypt(text, key);
    }

    document.getElementById('outputText').value = result;
}
