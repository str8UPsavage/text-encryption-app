// Caesar Cipher
function caesarEncrypt(text, shift) {
    shift = parseInt(shift) % 26;
    return text.toLowerCase().split('').map(char => {
        if (char >= 'a' && char <= 'z') {
            let code = (char.charCodeAt(0) - 97 + shift + 26) % 26;
            return String.fromCharCode(code + 97);
        }
        return char;
    }).join('');
}

function caesarDecrypt(text, shift) {
    return caesarEncrypt(text, -parseInt(shift));
}

// Vigenère Cipher
function vigenereEncrypt(text, key) {
    text = text.toLowerCase().replace(/[^a-z]/g, '');
    key = key.toLowerCase().replace(/[^a-z]/g, '');

    let result = '';
    for (let i = 0; i < text.length; i++) {
        let t = text.charCodeAt(i) - 97;
        let k = key.charCodeAt(i % key.length) - 97;
        let c = (t + k) % 26;
        result += String.fromCharCode(c + 97);
    }
    return result;
}

function vigenereDecrypt(text, key) {
    text = text.toLowerCase().replace(/[^a-z]/g, '');
    key = key.toLowerCase().replace(/[^a-z]/g, '');

    let result = '';
    for (let i = 0; i < text.length; i++) {
        let c = text.charCodeAt(i) - 97;
        let k = key.charCodeAt(i % key.length) - 97;
        let p = (c - k + 26) % 26;
        result += String.fromCharCode(p + 97);
    }
    return result;
}

// XOR Cipher
function xorEncrypt(text, key) {
    return text.split('').map((char, i) =>
        String.fromCharCode(char.charCodeAt(0) ^ key.charCodeAt(i % key.length))
    ).join('');
}

function xorDecrypt(text, key) {
    return xorEncrypt(text, key); // XOR è simmetrico
}
s