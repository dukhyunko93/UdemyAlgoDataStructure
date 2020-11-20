class Node{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BST{
    constructor(){
        this.root = null;
    }

    insert(val){
        let newNode = new Node(val)
        if(!this.root){
            this.root = newNode;
            return this;
        } else {
            let current = this.root;
            while(true){
                if(val === current.val) return undefined;
                if(val < current.val){
                    if(current.left === null){
                        current.left = newNode;
                        return this;
                    } else {
                        current = current.left;
                    }
                } else if (val > current.val){
                    if(current.right === null){
                        current.right = newNode;
                        return this;
                    } else {
                        current = current.right;
                    }
                } 
            }
        }
    }

    find(val){
        if(!this.root) return false;
        let current = this.root, found = false;
        while(current && !found){
            if(val < current.val){
                current = current.left;
            } else if (val > current.val){
                current = current.right;
            } else {
                found = true;
            }
        }
        if(!found) return undefined;
        return current;
    }

    contains(val){
        if(!this.root) return false;
        let current = this.root, found = false;
        while(current && !found){
            if(val < current.val){
                current = current.left;
            } else if (val > current.val){
                current = current.right;
            } else {
                return true;
            }
        }
        return false;;
    }

    BFS(){
        let node = this.root, data = [], queue = [];
        queue.push(this.root);
        while(queue.length){
            node = queue.shift();
            data.push(node.val);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        return data;
    };

    DFSPreOrder(){
        let data = [];
        let current = this.root;
        function trasverse(node){
            data.push(node.val)
            if(node.left) trasverse(node.left);
            if(node.right) trasverse(node.right);
        }
        trasverse(current);
        return data;
    }

}

let tree = new BST();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);