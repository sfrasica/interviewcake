function findClosestValueInBst(tree, target) {
    return findClosestValueInBstHelper(tree, target, tree.value)
  }
  
  function findClosestValueInBstHelper(tree, target, closest){
      let currentNode = tree;
  while (currentNode !== null) {
          if (Math.abs(currentNode.value - target) < Math.abs(closest - target)){
              closest = currentNode.value;
          }
          if (target > currentNode.value) {
              currentNode = currentNode.right;
          } else if (target < currentNode.value) {
              currentNode = currentNode.left;
          } else {
                  break;
          }
    }
      return closest;
  }
  // This is the class of the input tree. Do not edit.
  class BST {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  // Do not edit the line below.
  exports.findClosestValueInBst = findClosestValueInBst;
  