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
   * @param childValue The value eof the child node to be added
   */
  addChild(childValue: T): void {
    this.children.push(new TreeNode(childValue));
  }
}

/** Class representing a tree. */
export class Tree<T> {
  root: TreeNode<T>;

  /**
   * Initializes the tree with a root node.
   * @param rootValue The value of the root node
   */
  constructor(rootValue: T) {
    this.root = new TreeNode(rootValue);
  }

  /**
   * Adds a child to the tree node.
   * @param value The value of the child node to be added
   * @param node The node to start searchin from (default is the root node)
   * @returns The found node or null
   */
  search(value: T, node: TreeNode<T> | null = this.root): TreeNode<T> | null {
    if (!node) return null;
    if (node.value === value) return node;

    for (const child of node.children) {
      const found = this.search(value, child);
      if (found) return found;
    }
    return null;
  }

  /**
   * Returns the height of the tree.
   * @param node The node to calculate the height from (default is the root node)
   * @returns The height of the tree
   */
  getHeight(node: TreeNode<T> | null = this.root): number {
    if (!node) return 0;

    let maxHeight = 0;
    for (const child of node.children) {
      maxHeight = Math.max(maxHeight, this.getHeight(child));
    }
    return maxHeight + 1;
  }

  /**
   * Returns the number of nodes in the tree.
   * @param node The node to start counting from (default is the root node)
   * @returns The number of nodes in the tree
   */
  countNodes(node: TreeNode<T> | null = this.root): number {
    if (!node) return 0;

    let count = 1; // Count this node
    for (const child of node.children) {
      count += this.countNodes(child);
    }
    return count;
  }
}
