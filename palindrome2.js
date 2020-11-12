function isPalindrome(string) {
    // Write your code here.
      let strArr = string.split('');
      let revArr = []
      
      strArr.map(char => {
          revArr.unshift(char)
      })
      let revStr = revArr.join('')
      return revStr === string
  }

  