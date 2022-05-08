import "./App.css";

//import router to control the router of all aplication
import { BrowserRouter as Router } from "react-router-dom";
import Headquarters from "./config/routes/MainHeadquarters";

function App() {
  return (
    <Router>
      <div className="App">
        <Headquarters />
      </div>
    </Router>
  );
}

export default App;
