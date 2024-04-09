import { useState } from "react";

import "./App.css";
import Person from "./components/Person";

function App() {
  return (
    <div>
      <Person
        name={{ first: "John", last: "Smith" }}
        age={27}
        occupation={"engeneer"}
        alive={true}
      ></Person>
    </div>
  );
}

export default App;
