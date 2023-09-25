// 내가 푼 코드
function solution(priorities, location) {
  const arr = priorities.map((prior, index) => ({ prior, index }));
  const sorted = priorities.sort((a, b) => a - b);
  let count = 1;

  while (true) {
    const max = sorted.pop();
    const now = arr.findIndex((item) => item.prior === max);
    const sliced = arr.splice(0, now + 1);
    const cur = sliced.pop();

    if (cur.index === location) break;
    else {
      arr.push(...sliced);
      count++;
    }
  }

  return count;
}

// 강사님 코드
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.size = 0;
  }

  enQueue(value) {
    const node = new Node(value);

    if (this.front === null) {
      this.front = node;
      this.rear = node;
    } else {
      this.rear.next = node;
      this.rear = node;
    }

    this.size++;
  }

  deQueue() {
    const value = this.front;

    this.front = this.front.next;
    this.size--;

    return value;
  }

  peek() {
    return this.front.value;
  }
}

function solution(priorities, location) {
  const queue = new Queue();
  let count = 0;

  priorities.forEach((node, idx) => queue.enQueue([node, idx]));

  const sorted = priorities.sort((a, b) => b - a);

  while (true) {
    const curNode = queue.deQueue().value;

    if (curNode[0] < sorted[count]) queue.enQueue(curNode);
    else {
      count++;

      if (curNode[1] === location) return count;
    }
  }
}

console.log(solution([2, 1, 3, 2], 2));
