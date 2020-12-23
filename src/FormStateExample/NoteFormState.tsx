import { FormState, FieldState } from "formstate";
import { observable } from "mobx";

export const required = (val: any) => {
  if (val instanceof Array) {
    if (val.length > 0) {
      return;
    }
  } else if (val) {
    return;
  }
  return "Bitte ausfüllen";
};

export default class NoteFormState {
  @observable
  public form = new FormState({
    id: new FieldState<number>(1),
    topic: new FieldState("topic").validators(required),
    text: new FieldState(""),
    priority: new FieldState<number>(0)
  }).validators(
    $ => $.id.$ < 0 && "ID incorrect",
    $ => !$.id.$ && "ID missing",
    $ => $.text.$.length > 255 && "Text does exceed limit of 255 characters",
    $ => $.priority.$ < 0 && "Priority has to be between 0 and 9",
    $ => $.priority.$ > 9 && "Priority has to be between 0 and 9"
  );
}
