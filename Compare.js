function Node(value) {
  return {
    value,
    next: null
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  
  push(value) {
    const node = Node(value);
    // The list is empty
    if (this.head === null) {
      this.head = node;
      this.tail = node;
      this.length++;
      return node;
    }
    this.tail.next = node;
    this.tail = node;
    this.length++;
  }
    
  pop() {
    if (this.isEmpty()) {
      return null;
    }
    
    const nodeToRemove = this.tail;

    // There's only one node!
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      this.length--;
      return nodeToRemove;
    }
    
    let currentNode = this.head;
    let secondToLastNode;
    
    // Start at the front and iterate until
    // we find the second to last node
    while (currentNode) {
      if (currentNode.next === this.tail) {
        // Move the pointer for the second to last node
        secondToLastNode = currentNode;
        break;
      }
      currentNode = currentNode.next;
    }
    // Pop off that node
    secondToLastNode.next = null;
    // Move the tail to the second to last node
    this.tail = secondToLastNode;
    this.length--;
    
    // Initialized to this.tail
    return nodeToRemove;
  }
    
  get(index) {
    // Index is outside the bounds of the list
    if (index < 0 || index > this.length) {
      return null;
    }
    
    if (this.isEmpty()) {
      return null;
    }
    
    // We're at the head!
    if (index === 0 )  {
      return this.head;
    }
    
    let current = this.head;
    let iterator =  0;
    
    while (iterator < index) {
      iterator++;
      current = current.next;
    }
    
    return current;
  }
    
  delete(index) {
     // Index is outside the bounds of the list
    if (index < 0 || index > this.length - 1) {
      return null;
    }
    
    if (this.isEmpty()) {
      return null;
    }
    
    if (index === 0) {
      const nodeToDelete = this.head;
      this.head = this.head.next;
      this.length--;
      return nodeToDelete;
    }
    
    let current = this.head;
    let previous;
    let iterator = 0;
    
    while (iterator < index) {
      iterator++;
      previous = current;
      current = current.next;
    }
    const nodeToDelete = current;
    // Re-direct pointer to skip the element we're deleting
    previous.next = current.next;
    
    // We're at the end
    if(previous.next === null) {
      this.tail = previous;
    }
    
    this.length--;
    
    return nodeToDelete;
  }
    
  isEmpty() {
    return this.length === 0;
  }
  
  printList () {
    const nodes = [];
    let current = this.head;
    while (current) {
      nodes.push(current.value);
      current = current.next;
    }
    return nodes.join(' -> ');
  }
}

const myList = new LinkedList();
const values = ['a', 'b', 'c', 'd', 'e'];
values.forEach(value => myList.push(value));
console.log(myList.printList()); // 'a -> b -> c -> d -> e'
myList.pop();
myList.pop();
console.log(myList.printList()); // 'a -> b -> c
myList.push('x');
myList.push('y');
myList.push('z');
console.log(myList.printList()); // 'a -> b -> c -> x -> y -> z
myList.delete(3);
console.log(myList.printList()); // 'a -> b -> c -> y -> z
console.log(myList.get(3));

const myListTwo = new LinkedList();
values.forEach(value => myListTwo.push(value));
console.log(myListTwo.printList()); // 'a -> b -> c -> d -> e'
myListTwo.pop();
myListTwo.pop();
console.log(myListTwo.printList()); // 'a -> b -> c
myListTwo.push('x');
myListTwo.push('y');
myListTwo.push('y');
console.log(myListTwo.printList()); // 'a -> b -> c -> x -> y -> z
myListTwo.delete(3);
console.log(myListTwo.printList()); // 'a -> b -> c -> y -> y
console.log(myListTwo.get(3));

function compare(oneList, twoList) { 
    console.log(oneList, twoList);
        if (oneList == null && twoList == null) { 
            return 0; 
        } 
        oneList = oneList.head;
        twoList = twoList.head;
        while (oneList != null && twoList != null && oneList.value == twoList.value) { 
            oneList = oneList.next; 
            twoList = twoList.next; 
        } 
        if (oneList != null && twoList != null) { 
            return (oneList.value > twoList.value ? 1 : -1); 
        } 
        if (oneList != null && twoList == null) { 
            return 1; 
        } 
        if (oneList == null && twoList != null) { 
            return -1; 
        } 
        console.log(oneList, twoList);
        return 0; 
    } 

console.log(compare(myList, myListTwo));