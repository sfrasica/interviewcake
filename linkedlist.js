class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(data) {
        this.head = new Node(data, this.head);
    }

    size() {
        let counter = 0;
        let node = this.head;

        while (node) {
            counter++;
            node = node.next;
        }
        return counter;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        if (!this.head) {
            return null;
        }

        let node = this.head;
        while (node) {
            if (!node.next) {
                return node;
            }
            node = node.next;
        }
    }

    insertLast(data) {
        const last = this.getLast();
    
        if (last) {
          // There are some existing nodes in our chain
          last.next = new Node(data);
        } else {
          // The chain is empty!
          this.head = new Node(data);
        }
      }

      removeAt(index) {
        if (!this.head) {
          return;
        }
    
        if (index === 0) {
          this.head = this.head.next;
          return;
        }
    
        const previous = this.getAt(index - 1);
        if (!previous || !previous.next) {
          return;
        }
        previous.next = previous.next.next;
      }

      getAt(index) {
        let counter = 0;
        let node = this.head;

        while (node) {
            if (index === counter) {
                return node;
            } else {
                counter++;
                node = node.next;
            }
        }
        return null;
    }
}