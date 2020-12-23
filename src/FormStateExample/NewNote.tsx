import * as React from "react";
import NoteFormState from "./NoteFormState";
import NoteInput from "./NoteInput";
import Note from "./Note";
import NoteStore from "../Stores/NoteStore";
import { SubmitButton } from "../StyledComponents/StyledNoteInput";

interface INewNote {
  store: NoteStore;
}
export default class NewNote extends React.Component<INewNote> {
  formstate = new NoteFormState();
  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <NoteInput fields={this.formstate} />
        <SubmitButton type="submit" value="submit" />
      </form>
    );
  }
  handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    const { $ } = this.formstate.form;
    e.preventDefault();
    const res = await this.formstate.form.validate();
    if (res.hasError) {
      console.log("Error: " + this.formstate.form.error);
      return;
    }
    const newNote: Note = {
      id: $.id.value,
      topic: $.topic.value,
      text: $.text.value,
      priority: $.priority.value
    };
    this.props.store.get().push(newNote);
    $.id.value = Number($.id.value) + 1;
  };
}
