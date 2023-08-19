class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  
  set(value) {
    if (this.root === null) {
      this.root = new TreeNode(value);
      return;
    }

    let currentNode = this.root;

    while (true) {
      if (value === currentNode.value) return; // Do not allow duplicate values

      if (value < currentNode.value) {
        if (currentNode.left === null) {
          currentNode.left = new TreeNode(value);
          return;
        }
        currentNode = currentNode.left;
      } else {
        if (currentNode.right === null) {
          currentNode.right = new TreeNode(value);
          return;
        }
        currentNode = currentNode.right;
      }
    }
  }

  get(value) {
    let currentNode = this.root;

    while (currentNode !== null) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else {
        return currentNode;
      }
    }

    return false;
  }

  remove(value) {
    this.root = this.deleteNode(this.root, value);
  }

  deleteNode(root, value) {
    if (root === null) return root; 
    if (value < root.value) {
      root.left = this.deleteNode(root.left, value);
    } else if (value > root.value) {
      root.right = this.deleteNode(root.right, value);
    } else {
      if (root.left === null) return root.right;
      if (root.right === null) return root.left;

      let temp = this.findMinNode(root.right);
      root.value = temp.value;
      root.right = this.deleteNode(root.right, temp.value);
    }

    return root;
  }

  findMinNode(node) {
    while (node.left !== null) {
      node = node.left;
    }
    return node;
  }

  inOrderTraversal() {
    const result = [];

    function traverse(node) {
      if (node === null) return;

      traverse(node.left);
      result.push(node.value);
      traverse(node.right);
    }

    traverse(this.root);

    return result;
  }

  preOrderTraversal() {
    const result = [];

    function traverse(node) {
      if (node === null) return;

      result.push(node.value);
      traverse(node.left);
      traverse(node.right);
    }

    traverse(this.root);

    return result;
  }

  postOrderTraversal() {
    const result = [];

    function traverse(node) {
      if (node === null) return;

      traverse(node.left);
      traverse(node.right);
      result.push(node.value);
    }

    traverse(this.root);

    return result;
  }
}

// Example usage:
let binarySearch = new BST();

binarySearch.set(1);
binarySearch.set(4);
binarySearch.set(2);
binarySearch.set(6);
binarySearch.set(7);
binarySearch.set(20);

binarySearch.remove(6);

console.log(binarySearch.get(4));

console.log(binarySearch.inOrderTraversal()); // [1, 2, 4, 7, 20]
console.log(binarySearch.preOrderTraversal()); // [7, 4, 2, 1, 20]
console.log(binarySearch.postOrderTraversal()); // [1, 2, 4, 20, 7]
