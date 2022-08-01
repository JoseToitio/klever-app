import { Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import "./App.css"
import EditToken from "./pages/EditToken";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/editToken" element={<EditToken />} />
      </Routes>
    </div>
  );

}

export default App;
