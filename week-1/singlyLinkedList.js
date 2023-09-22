class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  find(value) {
    let currentNode = this.head;

    while (currentNode && currentNode.value !== value) {
      currentNode = currentNode.next;
    }

    if (currentNode === null) {
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
      this.tail = node;
    }

    this.size++;
  }

  insert(prevNodeValue, value) {
    const node = new Node(value);
    const currentNode = this.find(prevNodeValue);

    if (currentNode) {
      node.next = currentNode.next;
      currentNode.next = node;
    }

    this.size++;
  }

  remove(value) {
    let prevNode = this.head;

    if (prevNode === null) {
      return console.log('단일 리스트가 비어 있습니다.');
    }

    // 찾고자 하는 노드가 없는 경우에 대응
    while (prevNode.next && prevNode.next.value !== value) {
      prevNode = prevNode.next;
    }

    if (prevNode.next !== null) {
      prevNode.next = prevNode.next.next;
      this.size--;
    } else {
      console.log('찾는 노드가 없습니다!');
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

  size() {
    let currentNode = this.head;
    let size = 0;

    while (currentNode !== null) {
      size++;

      currentNode = currentNode.next;
    }

    return size;
  }
}

const singlyLinkedList = new SinglyLinkedList();

singlyLinkedList.find(2);
