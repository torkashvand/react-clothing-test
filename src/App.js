import React from "react";
import HomePage from "./pages/homepage/homepage.component";
import "./App.css";
import { Switch, Route, BrowserRouter } from "react-router-dom";

const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
);

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/hats" component={HatsPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
