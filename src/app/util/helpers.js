export function not(value) {
  return !value;
}

export class Counter {
  constructor(start = 0) {
    this.counter = start;
  }

  increment = () => {
    ++this.counter
    return this;
  }

  decrement = () => {
    --this.counter;
    return this;
  }

  value = () => this.counter;
}
