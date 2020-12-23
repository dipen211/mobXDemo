import { inject as mobxInject } from "mobx-react";
import NoteStore from "./Stores/NoteStore";

export class InjectorContainer {
  notestore = new NoteStore();
}
export function inject(...names: (keyof InjectorContainer)[]) {
  return mobxInject(...(names as string[]));
}
