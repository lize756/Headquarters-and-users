//import router to control the router of all aplication
import { BrowserRouter as Router } from "react-router-dom";
import Headquarters from "./config/routes/MainHeadquarters";
//Redux
import { Provider } from "react-redux";
import Store from "../src/store/indexStore";
function App() {
  return (
    <Provider store={Store}>
      <Router>
        <div className="App">
          <Headquarters />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
