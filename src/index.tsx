import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NoteManager from "./FormStateExample/NoteManager";
import { InjectorContainer } from "./injector";
import { Provider } from "mobx-react";

const rootElement = document.getElementById("root");
const container = new InjectorContainer();
ReactDOM.render(
  <Provider {...container}>
    <Router>
      <div>
        <Route path="/" component={NoteManager} />
      </div>
    </Router>
  </Provider>,
  rootElement
);

// styled components
// + props
