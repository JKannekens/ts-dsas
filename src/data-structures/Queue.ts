/** Class representing a Queue */
export class Queue<T> {
  items: T[] = [];

  /**
   * Enqueues an item to the queue
   * @param item The item to be enqueued
   */
  enqueue(item: T): void {
    this.items.push(item);
  }

  /**
   * Dequeues the first item from the queue
   * @returns The first item from the queue
   */
  dequeue(): T | undefined {
    return this.items.shift();
  }

  /**
   * Returns the first item from the queue without removing it
   * @returns The first item from the queue
   */
  peek(): T | undefined {
    return this.items[0];
  }

  /**
   * Checks if the queue is empty
   * @returns True if the queue is empty, false otherwise
   */
  isEmpty(): boolean {
    return this.items.length === 0;
  }

  /**
   * Returns the size of the queue
   * @returns The size of the queue
   */
  size(): number {
    return this.items.length;
  }
}
