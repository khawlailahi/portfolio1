import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router, Route, Switch, } from "react-router-dom";
import View from "./Components/view.js"
import MadeWithLove from "./Components/madeWithLove.js"
import Carsooq from "./Components/carsooq.js"
import Newsy from "./Components/newsy.js"


function App() {



  return (
    <div style={{
      color: "black",
      backgroundOpacity: "0.5",
      backgroundSize: "100%",
    }}>

      <Router>
        <Switch>
          <Route path='/' exact component={View}></Route>
          <Route path='/madeWithLove' exact component={MadeWithLove}></Route>
          <Route path='/carsooq' exact component={Carsooq}></Route>
          <Route path='/newsy' exact component={Newsy}></Route>
        </Switch>
      </Router>


    </div >
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
export default App;
