import { observable } from "mobx";
import Note from "../FormStateExample/Note";
import BaseStore from "./BaseStore";

export default class NoteStore extends BaseStore<Note> {}
