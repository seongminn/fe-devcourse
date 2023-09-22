class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class CircularLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  find(value) {
    let currentNode = this.head;
    let index = 1;

    while (currentNode.value !== value && index <= this.size) {
      currentNode = currentNode.next;
      index++;
    }

    if (index > this.size) {
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
      this.tail.next = this.head;
    } else {
      this.tail.next = node;
      node.next = this.head;
      this.tail = node;
    }

    this.size++;
  }

  unshift(value) {
    const node = new Node(value);

    if (this.head === null) {
      this.head = node;
      this.tail = node;
      this.tail.next = this.head;
    } else {
      this.tail.next = node;
      node.next = this.head;
      this.head = node;
    }

    this.size++;
  }

  insert(prevValue, value) {
    const node = new Node(value);
    const currentNode = this.find(prevValue);

    if (currentNode !== null) {
      if (currentNode === this.tail) {
        this.tail = node;
      }

      node.next = currentNode.next;
      currentNode.next = node;

      this.size++;
    }
  }

  remove(value) {
    let prevNode = this.head;
    let index = 1;

    if (prevNode === null) return console.log('환형 리스트가 비어 있습니다.');

    if (prevNode.value === value) {
      this.tail.next = prevNode.next;
      this.head = prevNode.next;
      this.size--;

      if (this.size === 0) {
        this.tail = null;
        this.head = null;
      }

      return;
    }

    while (prevNode.next.value !== value && index <= this.size) {
      prevNode = prevNode.next;
      index++;
    }

    if (index > this.size) {
      console.log('찾는 노드가 없습니다.');
    } else {
      prevNode.next = prevNode.next.next;
      this.size--;
    }
  }

  display() {
    let currentNode = this.head;
    let index = 1;
    let answer = '[ ';

    while (currentNode !== null && index <= this.size) {
      answer += `${currentNode.value}, `;

      currentNode = currentNode.next;
      index++;
    }

    console.log(`${answer}]`);
  }
}
