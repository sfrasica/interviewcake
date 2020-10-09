function addArrays(array1, array2) {
  
    if(array1.length < 1 && array2.length < 1){
      return []
    }
    else if( array1.length < 1 ){
      return array2
    }
    else if( array2.length < 1){
      return array1
    }
    
      //num1 & num2 converts arrays to ints
    let num1 = parseInt(array1.join(''));
    let num2 = parseInt(array2.join(''));
    let sum = num1 + num2;
    

    let strArr = sum.toString().split('')
    let newArr = []
    
    if(strArr[0] === '-'){
      strArr[1] = '-'+ strArr[1]
      strArr.shift()
    }
    
    
    for(let char of strArr){
      newArr.push(parseInt(char))
    }
    return newArr
  
  }