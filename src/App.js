import React, { Component } from "react";

import notas from "./notas";
import Item from "./components/Item";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <ul className="list">
            {notas.map(nota => (
              <Item {...nota} key={nota.id} />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
