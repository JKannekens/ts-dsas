import { expect, test } from "bun:test";
import { Stack } from "../../src/data-structures/Stack";

test("push method adds an item to the stack", () => {
  const stack = new Stack<number>();
  stack.push(1);
  expect(stack.size()).toBe(1);
  expect(stack.peek()).toBe(1);
});

test("pop method removes the last item from the stack", () => {
  const stack = new Stack<number>();
  stack.push(1);
  stack.push(2);
  const poppedItem = stack.pop();
  expect(poppedItem).toBe(2);
  expect(stack.size()).toBe(1);
  expect(stack.peek()).toBe(1);
});

test("peek method returns the last item without removing it", () => {
  const stack = new Stack<number>();
  stack.push(1);
  stack.push(2);
  const peekedItem = stack.peek();
  expect(peekedItem).toBe(2);
  expect(stack.size()).toBe(2);
});

test("isEmpty method returns true for an empty stack", () => {
  const stack = new Stack<number>();
  expect(stack.isEmpty()).toBe(true);
  stack.push(1);
  expect(stack.isEmpty()).toBe(false);
});

test("size method returns the correct size of the stack", () => {
  const stack = new Stack<number>();
  expect(stack.size()).toBe(0);
  stack.push(1);
  stack.push(2);
  expect(stack.size()).toBe(2);
});
