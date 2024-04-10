import { useState } from "react";
import "./App.css";

import Button from "./components/Button";
import Input from "./components/Input";

function App() {
  const [value, setValue] = useState("some text");

  return (
    <div>
      <Button
        handleClick={(event, id) => {
          console.log("Button clicked", event, id);
        }}
      />
      <Input
        value={value}
        handleChange={(event) => {
          setValue(event.target.value);
        }}
      />
    </div>
  );
}

export default App;
