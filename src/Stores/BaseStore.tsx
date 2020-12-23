import { observable } from "mobx";

export default class BaseStore<T> {
  private data = observable<T>([]);
  push(t: T) {
    this.data.push(t);
  }
  get(): T[] {
    return this.data;
  }
  pop(t: T) {
    this.data.replace(this.data.filter(n => n != t));
  }
}
