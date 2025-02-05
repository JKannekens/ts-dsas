import { expect, test } from "bun:test";
import { BinaryTree } from "../../src/data-structures/BinaryTree";

test("BinaryTree should be initialized with a root node", () => {
  const tree = new BinaryTree<number>(1);
  expect(tree.root.value).toBe(1);
});

test("addLeftChild() adds a left child to the binary tree node", () => {
  const tree = new BinaryTree<number>(1);
  tree.root.addLeftChild(2);
  expect(tree.root.left?.value).toBe(2);
});

test("addRightChild() adds a right child to the binary tree node", () => {
  const tree = new BinaryTree<number>(1);
  tree.root.addRightChild(3);
  expect(tree.root.right?.value).toBe(3);
});
