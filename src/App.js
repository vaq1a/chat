import SignIn from "./pages/SignIn";
import Room from "./pages/Room";
import {
    Switch,
    Route
} from "react-router-dom";


function App() {
  return (
      <Switch>
        <Route path="/"
               exact>
          <SignIn />
        </Route>
        <Route path="/room/:roomId"
               exact>
          <Room />
        </Route>
      </Switch>
  )
}

export default App;
