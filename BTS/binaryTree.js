class Tree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BTS {
  constructor() {
    this.root = null;
  }

  set(value) {
    if (this.root == null) {
      this.root = new Tree(value);
      return;
    }

    var currentNode = this.root;

    while (true) {
      if (currentNode.value == value) return null;

      if (value < currentNode.value) {
        if (currentNode.left == null) {
          currentNode.left = new Tree(value);
          return;
        }
        currentNode = currentNode.left;
      } else {
        if (currentNode.right == null) {
          currentNode.right = new Tree(value);
          return;
        }
        currentNode = currentNode.right;
      }
    }
  }

  get(value) {
    if (this.root == null) return false;
    var currentNode = this.root;
    var found = false;

    while (!found && currentNode) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else {
        found = true;
      }
    }
    if (!found) return false;

    return currentNode;
  }

  remove(value) {
    this.delete(this.root, value);
  }

  delete(root, value) {
    if (root.value > value) {
      root.left = this.delete(root.left, value);
    } else if (root.value < value) {
      root.right = this.delete(root.right, value);
    } else {
      if (root.left == null && root.right == null) return null;

      if (root.right == null) return root.left;

      if (root.left == null) return root.right;

      let del = this.innorderSuccessor(root.right);

      root.value = del.value;

      root.right = this.delete(root.right, del.value);
    }
    return root;
  }

  innorderSuccessor(root) {
    while (root.left != null) {
      root = root.left;
    }
    return root;
  }

  BFS() {
    var node = this.root;

    var queue = [],
      result = [];

    queue.push(node);

    while (queue.length) {
      node = queue.shift();
      result.push(node.value);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    return result;
  }

  DFpreOrder() {
    var result = [];

    function traversal(node) {
      result.push(node.value);

      if (node.left) traversal(node.left);

      if (node.right) traversal(node.right);
    }

    traversal(this.root);

    return result;
  }

  DFpostOrder() {
    var result = [];

    function traversal(node) {
      if (node.left) traversal(node.left);

      if (node.right) traversal(node.right);

      result.push(node.value);
    }

    traversal(this.root);

    return result;
  }
  DFinOrder() {
    var result = [];

    function traversal(node) {
      if (node.left) traversal(node.left);

      result.push(node.value);

      if (node.right) traversal(node.right);
    }

    traversal(this.root);

    return result;
  }
}

let binarySearch = new BTS();

binarySearch.set(1);
binarySearch.set(4);
binarySearch.set(2);
binarySearch.set(6);
binarySearch.set(7);
binarySearch.set(20);

binarySearch.remove(277);

console.log(binarySearch.BFS());
console.log(binarySearch.get(5));
