const { Node } = require("./node");
const Compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1,
  EQUAL: 0,
};
const defaultCompareFunction = (a, b) => {
  if (a === b) {
    return Compare.EQUAL;
  }
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
};
class BinarySearchTree {
  constructor(compareFunction) {
    this.compareFunction =
      compareFunction && typeof compareFunction === "function"
        ? compareFunction
        : defaultCompareFunction;
    this.root = null;
  }

  insert = (key) => {
    this.root === null
      ? (this.root = new Node(key))
      : this.#insertNode(this.root, key);
  };
  search = (value) => {
    return this.#searchValue(value, this.root);
  };
  inOrderTraverse = (callback) => {
    this.#inOrderTraverseNode(this.root, callback);
  };
  preOrderTraverse = (callback) => {
    this.#preOrderTraverseNode(this.root, callback);
  };
  postOrderTraverse = (callback) => {
    this.#postOrderTraverseNode(this.root, callback);
  };
  min = () => {
    return this.#minValue(this.root);
  };
  max = () => {
    return this.#maxValue(this.root);
  };
  remove = (value) => {
    return this.#removeNode(value, this.root);
  };
  #removeNode = (value, node) => {
    if (node === null) {
      return false;
    }
    if (node.key > value) {
      this.#removeNode(value, node.left);
      return node;
    } else if (node.key < value) {
      this.#removeNode(value, node.right);
      return node;
    } else {
      // case 1 : no child node
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }
      // case 2: only one child
      if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }
      // case 3: node have two child
      const minNode = this.#minNode(node.right);
      node.key = minNode.key;
      node.right = this.#removeNode(minNode.key, node.right);

      return node;
    }
  };
  #searchValue = (value, node) => {
    // while (node != null) {
    //   if (value < node.key) {
    //     node = node.left;
    //   } else if (value > node.key) {
    //     node = node.right;
    //   } else {
    //     return true;
    //   }
    // }

    // return false;
    if (node === null) {
      return false;
    }
    if (this.compareFunction(value, node.key) === Compare.LESS_THAN) {
      return this.#searchValue(value, node.left);
    } else if (this.compareFunction(value, node.key) === Compare.BIGGER_THAN) {
      return this.#searchValue(value, node.right);
    } else {
      return true;
    }
  };
  #minValue = (node) => {
    while (node.left != null) {
      node = node.left;
    }
    return node.key;
  };
  #minNode = (node) => {
    while (node.left != null) {
      node = node.left;
    }
    return node;
  };
  #maxValue = (node) => {
    while (node.right != null) {
      node = node.right;
    }
    return node.key;
  };
  #insertNode(node, key) {
    if (this.compareFunction(key, node.key) === Compare?.LESS_THAN) {
      if (node.left == null) {
        node.left = new Node(key);
      } else {
        this.#insertNode(node.left, key);
      }
    } else {
      if (node.right == null) {
        node.right = new Node(key);
      } else {
        this.#insertNode(node.right, key);
      }
    }
  }
  #inOrderTraverseNode = (node, callback) => {
    if (node != null) {
      this.#inOrderTraverseNode(node.left, callback);
      callback(node.key);
      this.#inOrderTraverseNode(node.right, callback);
    }
  };
  #preOrderTraverseNode = (node, callback) => {
    if (node != null) {
      callback(node.key);
      this.#preOrderTraverseNode(node.left, callback);
      this.#preOrderTraverseNode(node.right, callback);
    }
  };
  #postOrderTraverseNode = (node, callback) => {
    if (node != null) {
      this.#postOrderTraverseNode(node.left, callback);
      this.#postOrderTraverseNode(node.right, callback);
      callback(node.key);
    }
  };
  toString() {
    return `{"key": ${
      this.root?.key
    }, "left": ${this.root.left?.toString()}, "right": ${this.root.right?.toString()}}`;
  }
}
let tree = new BinarySearchTree(defaultCompareFunction);
const values = [
  11, 7, 15, 5, 3, 9, 8, 10, 13, 12, 14, 20, 18, 25, 6, 21, 30, 19,
];
values.forEach((val) => {
  tree.insert(val);
});
console.log("=========== in order traverse ===============");
console.log(tree.inOrderTraverse(console.log));
console.log("============= remove element 25 ===========");
console.log(tree.remove(25));
console.log("=========== in order traverse after delete ===============");
console.log(tree.inOrderTraverse(console.log));
// console.log("=========== pre order traverse ===============");
// console.log(tree.preOrderTraverse(console.log));
// console.log("=========== post order traverse ===============");
// console.log(tree.postOrderTraverse(console.log));
// console.log("=========== minimum value ===============");
// console.log(tree.min());
// console.log("=========== maximum value ===============");
// console.log(tree.max());
// console.log("=========== search 40 value ===============");
// console.log(tree.search(40));
// console.log("=========== search 30 value ===============");
// console.log(tree.search(30));
// console.log(tree.search(25));
// console.log(tree.search(19));
