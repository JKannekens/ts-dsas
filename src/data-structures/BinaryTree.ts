/** Class representing a binary tree node */
class BinaryTreeNode<T> {
  value: T;
  left: BinaryTreeNode<T> | null = null;
  right: BinaryTreeNode<T> | null = null;

  /**
   * Initializes the binary tree node with a value.
   * @param value The value of the binary tree node
   */
  constructor(value: T) {
    this.value = value;
  }
}

/** Class representing a binary tree */
export class BinaryTree<T> {
  root: BinaryTreeNode<T> | null = null;

  /**
   * Initializes the binary tree with a root node.
   * @param rootValue The value of the root node
   */
  constructor(rootValue: T) {
    this.root = new BinaryTreeNode(rootValue);
  }
}
