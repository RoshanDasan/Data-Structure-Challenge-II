class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class Bst {
  constructor() {
    this.root = null;
  }

  add(value) {
    let node = new TreeNode(value);
    if (this.root === null) {
      this.root = node;
      return;
    }
    const tree = this.root;
    while (true) {
      if (tree.value === value) return;
      if (tree.value < value) {
        if (tree.left === null) {
          tree.left = node;
          return;
        }
        tree = tree.left;
      } else {
        if (tree.right === null) {
          tree.right = node;
          return;
        }
        tree = tree.right;
      }
    }
  }

  inorder() {
    const result = [];
    function traverse(node) {
      if (node.value == null) return;
      traverse(node.left);
      result.push(node.value);
      traverse(node.right);
    }
    traverse(this.root);
    return result
  }

  remove(value) {
    this.delete(this.root, value);
  }

  delete(root, value) {
    if (root === null) return root;
    if (root.value < value) {
      root.left = this.delete(root.left, value);
    } else if (root.value > value) {
      root.right = this.delete(root.right, value);
    } else {
      if (root.left === null) return root.right;
      if (root.right === null) return root.left;
      let small = this.small(root.right);
      this.root = small.value;
      root.right = this.delete(root.right, small.value);
    }
    return root;
  }
  small(root) {
    while (root.left) {
      root = root.left;
    }
    return root;
  }
}
