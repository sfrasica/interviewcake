class Node {
    constructor(name) {
      this.name = name;
      this.children = [];
    }
  
    addChild(name) {
      this.children.push(new Node(name));
      return this;
    }
  
    depthFirstSearch(array) {
          let currentNode = this;
          array.push(currentNode.name);
          for (let child of currentNode.children) {
              currentNode = child;
              currentNode.depthFirstSearch(array);
          }
          return array;
          };
  }
  