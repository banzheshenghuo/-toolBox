import { Link, HashRouter as Router, Switch, Route } from "react-router-dom";

import PrivateListPage from "./page/PrivateListPage";
import PublicListPage from "./page/PublicListPage";
import RollPage from "./page/RollPage";
import CustomWordPage from "./page/CustomWordPage";
import "./App.css";

function App() {
  return (
    <div className="h-screen">
      <Router>
        <Switch>
          <Route exact path="/">
            <div>
              <Link to="public">public</Link>
            </div>
            <div>
              <Link to="private">private</Link>
            </div>
          </Route>
          <Route exact path="/public">
            <PublicListPage />
          </Route>
          <Route exact path="/private">
            <PrivateListPage />
          </Route>
          <Route exact path="/public/roll">
            <RollPage />
          </Route>
          <Route exact path="/private/createWord">
            <CustomWordPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
