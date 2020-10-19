function duplicateSandwich(a) {
    console.log(a);
    
    let idxArray = findDuplicateElement(a)
    let startIdx = idxArray[0];
    let endIdx = idxArray[1];
  
    return a.slice(startIdx+1, endIdx)
  
    
  //   return input.slice(startIndex, endIndex)
  //   return [];
  } 
  
  // 
  function findDuplicateElement(input) {
      let startIdx;
      let endIdx;
  
      for (let i = 0; i < input.length; ++i) {
          let currentElement = input[i];
  
          for (let k = i+1; k < input.length; ++k) {
              let nextElement = input[k];
              if (currentElement === nextElement) {
                  startIdx = i;
                  endIdx = k;
              }
          }
      }
  
      return [startIdx, endIdx]
  }