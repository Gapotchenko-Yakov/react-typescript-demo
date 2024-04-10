import "./App.css";
import Box from "./components/context/Box";
import { User } from "./components/context/User";
import { UserContextProvider } from "./components/context/UserContext";

function App() {
  return (
    <div>
      <UserContextProvider>
        <User />
      </UserContextProvider>
    </div>
  );
}

export default App;
