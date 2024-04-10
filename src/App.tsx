import { useState } from "react";
import "./App.css";

import Container from "./components/Container";

function App() {
  const [value, setValue] = useState("some text");

  return (
    <div>
      <Container styles={{ border: "1px solid black", padding: "1rem" }} />
    </div>
  );
}

export default App;
