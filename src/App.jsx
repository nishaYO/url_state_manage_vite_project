import { navigate } from "wouter/use-location";
import Home from "./Home.jsx";
import { Router, Route, Switch } from "wouter";
// main page "/"
// main page has a button to home page
// home page has a lot of buttons in it with random ids and a back button
// whenever i click on a button the url gets appended with the button id and the text on the button is chagned from "Select Me" to "Selected".
// then if i go to back button in home page takes me back to "/"
// then i go again to the home page the url has the previously selected button ids and the text of those buttons is still "Selected".

function App() {

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <h1>Welcome page</h1>
          <button onClick={() => navigate("/home")}>Go to home page</button>
        </Route>
        <Route path="/home" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
