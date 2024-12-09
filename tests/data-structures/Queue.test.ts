import { expect, test } from "bun:test";
import { Queue } from "../../src/data-structures/Queue";

test("enqueue method adds an item to the queue", () => {
  const queue = new Queue<number>();
  queue.enqueue(1);
  expect(queue.size()).toBe(1);
  expect(queue.peek()).toBe(1);
});

test("dequeue method removes the first item from the queue", () => {
  const queue = new Queue<number>();
  queue.enqueue(1);
  queue.enqueue(2);
  const dequeuedItem = queue.dequeue();
  expect(dequeuedItem).toBe(1);
  expect(queue.size()).toBe(1);
  expect(queue.peek()).toBe(2);
});

test("peek method returns the first item without removing it", () => {
  const queue = new Queue<number>();
  queue.enqueue(1);
  queue.enqueue(2);
  const peekedItem = queue.peek();
  expect(peekedItem).toBe(1);
  expect(queue.size()).toBe(2);
});

test("isEmpty method returns true for an empty queue", () => {
  const queue = new Queue<number>();
  expect(queue.isEmpty()).toBe(true);
  queue.enqueue(1);
  expect(queue.isEmpty()).toBe(false);
});

test("size method returns the correct size of the queue", () => {
  const queue = new Queue<number>();
  expect(queue.size()).toBe(0);
  queue.enqueue(1);
  queue.enqueue(2);
  expect(queue.size()).toBe(2);
});
