import "./App.css";
import { ApiProvider } from "./context/ApiContext";
import Root from "./routes/root";

function App() {
  return (
    <ApiProvider>
      <Root />
    </ApiProvider>
  );
}

export default App;
