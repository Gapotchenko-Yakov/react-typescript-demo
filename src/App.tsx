import { useState } from "react";

import "./App.css";
import Person from "./components/Person";

function App() {
  return (
    <div>
      <Person name={{ first: "John", last: "Smith" }}></Person>
    </div>
  );
}

export default App;
