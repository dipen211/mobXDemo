import * as React from "react";
import { FieldState } from "formstate";
import NoteFormState from "./NoteFormState";
import { observer } from "mobx-react";
import { Label, Input } from "../StyledComponents/StyledNoteInput";

interface INoteInput {
  fields: NoteFormState;
}
export default class NoteInput extends React.Component<INoteInput> {
  render() {
    const { $: fields } = this.props.fields.form;
    return (
      <div>
        {/* <InputField value={fields.id} label="ID: " type="number" />
        <InputField value={fields.topic} label="Topic: " type="text" />
        <InputField value={fields.priority} label="Priority: " type="number" />
        <InputField value={fields.text} label="Text: " type="text" /> */}
      </div>
    );
  }
}

interface IInputField {
  label: string;
  value: FieldState<string | number>;
  type: string;
}
@observer
export class InputField extends React.Component<IInputField> {
  render() {
    const { value } = this.props;
    return (
      <div>
        <Label>{this.props.label}</Label>
        <Input
          type={this.props.type}
          value={value.value}
          onChange={(e: any) => value.onChange(e.target.value)}
        />
      </div>
    );
  }
}
