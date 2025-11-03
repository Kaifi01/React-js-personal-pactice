import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import { TodoProvider } from "./context/Context";

function App() {
  return (
    <>
      <TodoProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </TodoProvider>
    </>
  );
}

export default App;
