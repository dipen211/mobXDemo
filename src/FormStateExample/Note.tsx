import { observable } from "mobx";

export default class Note {
  @observable
  id!: number;
  @observable
  topic!: string;
  @observable
  text!: string;
  @observable
  priority!: number;
}
