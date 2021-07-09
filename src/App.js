import React, { Component } from "react";
import { Provider } from "react-redux";
// import Counter from "./Counter";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
// import CreateUser from "./CreateUser";
import DisplayUserList from "./DisplayUserList";
import PrefillData from "./PrefillData";
import store from "./store";

class App extends Component {
  handleSubmit = (values) => {
    // Do something with the form values
    console.log(values);
  };

  render() {
    // localStorage.setItem("dataPrefilled", false);
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={PrefillData} />
            {/* <Route path="/createUser" component={CreateUser} /> */}
            {/* <Route path="/updateUser" component={CreateUser} /> */}
            <Route path="/displayUser" component={DisplayUserList} />
          </Switch>
          <Redirect
            to={{
              pathname:
                localStorage.getItem("dataPrefilled") === "true"
                  ? "/displayUser"
                  : "/"
            }}
          />
        </Router>
      </Provider>
    );
  }
}

export default App;
