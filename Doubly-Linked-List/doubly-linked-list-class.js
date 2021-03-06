class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        let newNode = new Node(val);
        if (this.length === 0){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this
    }

    pop(){
        if(!this.head) return undefined;
        let popTail = this.tail;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        } else {
            let newTail = popTail.prev;
            this.tail = newTail;
            newTail.next = null;
        }
        this.length--;
        return popTail
    }

    shift(){
        if(!this.head) return undefined;
        let shiftHead = this.head;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        } else {
            this.head = shiftHead.next;
            this.head.prev = null;
            shiftHead.next = null;
        }
        this.length--;
        return shiftHead
    }
   
}

let list = new DoublyLinkedList()
list.push(1)
list.push(2)
list.push(3)
list.push(4)
list.push(5)