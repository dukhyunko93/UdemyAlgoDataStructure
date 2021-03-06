class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++
        return this;
    }

    pop(){
        if(!this.head) return undefined;
        let current = this.head;
        let newTail = current;
        while(current.next){
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length --;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    shift(){
        if(!this.head) return undefined;
        let currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return currentHead
    }
    
    unshift(val){
        let newNode = new Node(val)
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    
    get(index){
        if(index < 0 || index >= this.length) return undefined
        let i = 0;
        let current = this.head;
        while(i !== index){
            current = current.next;
            i++;
        }
        return current;
    }

    insert(index, val){
        if(index < 0 || index > this.length) return false;
        if(index === 0) return !!this.unshift(val);
        if(index === this.length) return !!this.push(val);
        else {
            let newNode = new Node(val);
            let prevNode = this.get(index - 1);
            newNode.next = prevNode.next;
            prevNode.next = newNode;
            this.length++;
            return true;
        }
    }

    remove(index){
        if(index < 0 || index >= this.length) return undefined;
        if(index === 0) return this.shift();
        if(index === this.length - 1) return this.pop();
        let prevNode = this.get(index - 1);
        let removeNode = prevNode.next;
        prevNode.next = removeNode.next;
        this.length--;
        return removeNode;
    }
}

list = new SinglyLinkedList

list.push("Hello")
list.push("There")
list.push("You")
list.push("!")