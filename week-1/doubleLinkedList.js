class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  find(value) {
    let currentNode = this.head;

    while (currentNode && currentNode.value !== value) {
      currentNode = currentNode.next;
    }

    if (!currentNode) {
      console.log('찾는 노드가 없습니다!');

      return null;
    }

    return currentNode;
  }

  append(value) {
    const node = new Node(value);

    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
  }

  unshift(value) {
    const node = new Node(value);

    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    }
  }

  insert(prevValue, value) {
    const node = new Node(value);
    const prevNode = this.find(prevValue);

    if (prevNode) {
      node.prev = prevNode;
      node.next = prevNode.next;
      prevNode.next.prev = node;
      prevNode.next = node;
    }
  }

  remove(value) {
    const currentNode = this.find(value);

    if (currentNode === null) return;

    if (currentNode.prev === null) {
      currentNode.next = this.head;
      currentNode.next.prev === null;
    } else if (currentNode.next === null) {
      currentNode.prev = this.tail;
      currentNode.prev.next = null;
    } else {
      currentNode.prev.next = currentNode.next;
      currentNode.next.prev = currentNode.prev;
    }
  }

  display() {
    let currentNode = this.head;
    let answer = '[ ';

    while (currentNode !== null) {
      answer += `${currentNode.value}, `;

      currentNode = currentNode.next;
    }

    console.log(`${answer}]`);
  }
}

const doubleLinkedList = new DoubleLinkedList();

doubleLinkedList.find(1);
