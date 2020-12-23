import * as React from "react";
import Note from "./Note";
import NoteStore from "../Stores/NoteStore";
import { observer } from "mobx-react";
import {
  Table,
  TableHeader,
  TableData,
  TableDataId
} from "../StyledComponents/StyledTables";

@observer
export default class NoteList extends React.Component<IListProps> {
  render() {
    return (
      <Table>
        <tbody>
          <tr>
            <TableHeader>ID</TableHeader>
            <TableHeader>Topic</TableHeader>
            <TableHeader>Priority</TableHeader>
            <TableHeader>Text</TableHeader>
          </tr>
          {this.props.store.get().map(note => {
            return (
              <tr key={note.id}>
                <TableDataId>{note.id}</TableDataId>
                <TableData>{note.topic}</TableData>
                <TableData>{note.priority}</TableData>
                <TableData>{note.text}</TableData>
                <TableData>
                  <input
                    type="button"
                    value="delete"
                    onClick={() => this.props.store.pop(note)}
                  />
                </TableData>
              </tr>
            );
          })}
        </tbody>
      </Table>
    );
  }
}
interface IListProps {
  store: NoteStore;
}
