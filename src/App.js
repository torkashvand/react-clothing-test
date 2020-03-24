import React from "react";

import { Switch, Route, BrowserRouter } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth } from "../src/firebase/firebase.utils";
import Header from "./components/header/header.component";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null
    };
  }

  unSubscribeFromAuth = null;

  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  componentWillUnmount() {
    console.log(this.state.currentUser);
    this.unSubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={ShopPage} />
            <Route path="/signin" component={SignInSignUp} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
