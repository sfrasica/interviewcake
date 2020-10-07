class Node {
  constructor(data) {
      this.data = data;
      this.children = [];
  }

  add(data) {
      this.children.push(new Node(data));
  }

}

class Tree {}

module.exports = { Tree, Node };