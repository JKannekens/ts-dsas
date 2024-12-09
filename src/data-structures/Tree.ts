/** Class representing a tree node. */
class TreeNode<T> {
  value: T;
  children: TreeNode<T>[] = [];

  /**
   * Initializes the tree node with a value.
   * @param value The value of the tree node
   */
  constructor(value: T) {
    this.value = value;
  }

  /**
   * Adds a child to the tree node.
   * @param child The child to be added
   */
  addChild(child: TreeNode<T>): void {
    this.children.push(child);
  }
}

/** Class representing a tree. */
export class Tree<T> {
  root: TreeNode<T> | null = null;

  /**
   * Initializes the tree with a root node.
   * @param rootValue The value of the root node
   */
  constructor(rootValue: T) {
    this.root = new TreeNode(rootValue);
  }
}
