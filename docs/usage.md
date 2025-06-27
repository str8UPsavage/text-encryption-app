# 🔐 Usage Instructions - Text Encryption App

This document explains how to use the Text Encryption App to encrypt and decrypt messages using three classical algorithms: Caesar Cipher, Vigenère Cipher, and XOR Cipher.

---

## 🖥️ Launching the App

1. Open the folder `text-encryption-app/`.
2. Double-click on the `index.html` file to launch the app in your web browser.
3. The interface will appear with fields to enter the text, select the algorithm, enter a key, and click Encrypt or Decrypt.

---

## ✍️ Input Fields

- **Text:** The message you want to encrypt or decrypt.
- **Algorithm:** Choose one of the following:
  - Caesar Cipher
  - Vigenère Cipher
  - XOR Cipher
- **Key:**
  - For Caesar: an integer (e.g., `4`)
  - For Vigenère: a string of letters (e.g., `abc`)
  - For XOR: any ASCII string (e.g., `secret`)

---

## 🔐 Encryption

Click the **Encrypt** button to encode the message using the selected algorithm and key.

### Example – Caesar Cipher
- Text: `giovanni`
- Algorithm: Caesar Cipher
- Key: `4`
- Output: `kmszerrm`

---

## 🔓 Decryption

Click the **Decrypt** button to decode the message. The same key must be used for correct results.

### Example – Vigenère Cipher
- Text: `cibp`
- Algorithm: Vigenère Cipher
- Key: `abc`
- Output: `ciao`

---

## ⚠️ Notes

- Caesar and Vigenère operate on **lowercase alphabetic characters only**.
- XOR works on **any ASCII characters**, including symbols and numbers.
- Decryption will fail or return garbage if the wrong key or algorithm is used.

---

## 🧪 Use Case: Manual Simulation

This app is designed for **educational purposes** and simulates manual encryption logic found in classical ciphers. It's not intended for securing real data.

