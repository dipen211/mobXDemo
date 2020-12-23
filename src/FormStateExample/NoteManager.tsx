import * as React from "react";
import { observer } from "mobx-react";
import Header from "../Header";
import NoteList from "./NoteList";
import NewNote from "./NewNote";
import { inject } from "../injector";
import NoteStore from "../Stores/NoteStore";
interface InjectedProps {
  notestore: NoteStore;
}
@inject("notestore")
@observer
export default class NoteManager extends React.Component<InjectedProps> {
  notes = this.props.notestore;
  render() {
    return (
      <div>
        <Header title="Notes" props={this.props} />
        <NewNote store={this.notes} />
        <NoteList store={this.notes} />
      </div>
    );
  }
}
