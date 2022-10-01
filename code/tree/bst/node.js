class Node {
  constructor(key) {
    this.key = key;
    this.right = null;
    this.left = null;
  }
  toString() {
    return ` {"key": ${this.key}, "right": ${this.right}, "left":${this.left}} `;
  }
}
module.exports = {
  Node,
};
