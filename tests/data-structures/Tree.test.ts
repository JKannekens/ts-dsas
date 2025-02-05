import { expect, test } from "bun:test";
import { Tree } from "../../src/data-structures/Tree";

test("Three should be initialized with a root node", () => {
  const tree = new Tree<number>(1);
  expect(tree.root.value).toBe(1);
});

test("addChild() adds a child to the tree node", () => {
  const tree = new Tree<number>(1);
  tree.root.addChild(2);
  expect(tree.root.children[0].value).toBe(2);
});

test("search() returns the correct node", () => {
  const tree = new Tree<number>(1);
  tree.root.addChild(2);
  tree.root.addChild(3);
  tree.root.children[0].addChild(4);
  tree.root.children[0].addChild(5);
  tree.root.children[1].addChild(6);
  tree.root.children[1].addChild(7);

  const foundNode = tree.search(4);
  expect(foundNode?.value).toBe(4);

  const notFoundNode = tree.search(8);
  expect(notFoundNode).toBe(null);
});

test("getHeight() returns the correct height of the tree", () => {
  const tree = new Tree<number>(1);
  tree.root.addChild(2);
  tree.root.addChild(3);
  tree.root.children[0].addChild(4);
  tree.root.children[0].addChild(5);
  tree.root.children[1].addChild(6);
  tree.root.children[1].addChild(7);

  expect(tree.getHeight()).toBe(3);
});

test("countNodes() returns the correct number of nodes in the tree", () => {
  const tree = new Tree<number>(1);
  tree.root.addChild(2);
  tree.root.addChild(3);
  tree.root.children[0].addChild(4);
  tree.root.children[0].addChild(5);
  tree.root.children[1].addChild(6);
  tree.root.children[1].addChild(7);

  expect(tree.countNodes()).toBe(7);
});
