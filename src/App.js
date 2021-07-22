import logo from './logo.svg';
import './App.css';

import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./pages/home/Home";
import { PAGES_URL } from './routers/routes';
import MoreInfo from "./pages/moreInfo/MoreInfo";
function App() {
  return (
    <div>
      <Router>
        <Route exact path = "/" component={Home} />
        <Route path = {PAGES_URL.MOREINFO} component ={MoreInfo}/>
      </Router>
    </div>
  );
}

export default App;
