import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar1 from "./Navbar1";
import Main from "./Main";


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar1 />
        <Switch>
          <Route>
            <Main />
          </Route>
          <Route></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
