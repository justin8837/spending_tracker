import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import { PAGES_URL } from "./routers/routes";
import MoreInfo from "./pages/moreInfo/MoreInfo";
import Home from "./pages/home/Home";

function App() {
  return (
    <div>
      <Router>
        <Route exact path="/" component={Dashboard} />
        <Route path={PAGES_URL.MOREINFO} component={MoreInfo} />
        <Route path={PAGES_URL.HOME} component={Home} />
      </Router>
    </div>
  );
}

export default App;
