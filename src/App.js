import { BrowserRouter } from "react-router-dom";
import RouterPage from "./router";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <RouterPage />
      </div>
    </BrowserRouter>
  );
}

export default App;
