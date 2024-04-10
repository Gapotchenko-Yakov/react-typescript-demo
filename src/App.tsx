import { useState } from "react";
import "./App.css";
import { ThemeContextProvider } from "./components/context/ThemeContext";
import Box from "./components/context/Box";

function App() {
  return (
    <div>
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
