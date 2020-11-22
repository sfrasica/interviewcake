function caesarCipherEncryptor(string, key) {
    // Write your code here.
      const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
      let strArr = string.split('')
      let shiftedArr = [];
      for (let i = 0; i < strArr.length; i++) {
           let lettersIndex = letters.indexOf(strArr[i])
           if (lettersIndex + key > 25) {
               lettersIndex = (lettersIndex + key) % 26;
           } else {
               lettersIndex = lettersIndex + key;
           }
               shiftedArr.push(letters[lettersIndex])
          }
      
      return shiftedArr.join('');
  // 
  
  }