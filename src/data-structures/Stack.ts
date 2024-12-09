/** Class representing a Stack */
export class Stack<T> {
  items: T[] = [];

  /**
   * Pushes an item to the stack
   * @param item The item to be pushed
   */
  push(item: T): void {
    this.items.push(item);
  }

  /**
   * Pops the last item from the stack
   * @returns The last item from the stack
   */
  pop(): T | undefined {
    return this.items.pop();
  }

  /**
   * Returns the last item from the stack without removing it
   * @returns The last item from the stack
   */
  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }

  /**
   * Checks if the stack is empty
   * @returns True if the stack is empty, false otherwise
   */
  isEmpty(): boolean {
    return this.items.length === 0;
  }

  /**
   * Returns the size of the stack
   * @returns The size of the stack
   */
  size(): number {
    return this.items.length;
  }
}
