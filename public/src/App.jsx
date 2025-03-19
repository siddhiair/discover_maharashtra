import "./App.css";
import { GlobalProvider } from "./context/store";
import Homepage from "./pages/Homepage";

const App = () => {
  return (
    <GlobalProvider>
      <Homepage />
    </GlobalProvider>
  );
};

export default App;
