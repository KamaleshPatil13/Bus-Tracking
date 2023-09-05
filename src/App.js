import "./App.css";
import SimpleMap from "./Components/SimpleMap";
import Header from "./Components/Header";
import Home from "./Components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header></Header>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/map" element={<SimpleMap/>} />
        </Routes>
      </Router>
      {/* <Home></Home> */}
      {/* <SimpleMap></SimpleMap> */}
    </div>
  );
}

export default App;
