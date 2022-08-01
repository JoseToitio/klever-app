import { Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import "./App.css"
import AddToken from "./pages/AddToken/index";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/editToken" element={<AddToken />} />
      </Routes>
    </div>
  );

}

export default App;
