# 📘 Technical Specifications – Text Encryption App

## 🧠 Objective

This project simulates three classical encryption algorithms for educational purposes:
- **Caesar Cipher**
- **Vigenère Cipher**
- **XOR Cipher**

It helps understand the basics of symmetric cryptography and the role of key management.

---

## 🔐 Implemented Algorithms

### 1. Caesar Cipher
- **Type**: Symmetric
- **Key**: Integer
- **Logic**: Each letter is shifted forward in the alphabet by `n` positions.
- **Example**:
  - Plaintext: `ciao`
  - Key: `3`
  - Output: `fldr`

### 2. Vigenère Cipher
- **Type**: Symmetric, polyalphabetic
- **Key**: Alphabetic string
- **Logic**: Each letter is encrypted by shifting based on the corresponding key character (a sequence of Caesar shifts).
- **Example**:
  - Plaintext: `ciao`
  - Key: `abc` → shifts = [0, 1, 2, 0]
  - Output: `cjbp`

### 3. XOR Cipher
- **Type**: Symmetric, binary
- **Key**: Any string
- **Logic**: Each character is XOR-ed with the corresponding key character.
- **Example**:
  - Plaintext: `ciao`
  - Key: `key`
  - Output: May contain unreadable symbols or characters

---

## ⚙️ App Input/Output

| Field         | Description                               |
|---------------|-------------------------------------------|
| `inputText`   | Plaintext or ciphertext                   |
| `key`         | Integer or string depending on the algorithm |
| `algorithm`   | Encryption method selection (dropdown)    |
| `outputText`  | Encrypted or decrypted result             |

---

## 🛠 Technical Notes

- Runs entirely on the **frontend** (no backend or database).
- Pure JavaScript (no libraries or frameworks).
- Intended for **educational use only** – not secure for real data.

---

## 📂 Project Files

| File           | Purpose                                 |
|----------------|------------------------------------------|
| `index.html`   | Web page structure                      |
| `style.css`    | User interface and layout               |
| `script.js`    | Handles user input and output logic     |
| `encryptor.js` | Implements the encryption algorithms    |

---

## 👤 Author

Developed by **Giombattista Traina**,  
SOC Analyst trainee and Red Team enthusiast.

Academy: [Istituto Volta]  
Certifications: In preparation for **CompTIA Security+**

