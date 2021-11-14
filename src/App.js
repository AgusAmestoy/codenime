import { Route, Link } from 'react-router-dom';

import Info from "./pages/Info.js"
import Home from './pages/Home.js'
import Directory from './pages/Directory';
import HentaiZone from './pages/HentaiZone';
import Emision from './pages/Emision.js';
import Watch from "./pages/Watch";
import MyList from "./pages/MyList";

import RegisterPage from './pages/Register';
import Login from './pages/Login';

function App() {
  return (
    <>
      <Route exact path="/" component={Home}/>
      <Route exact path="/Information" component={Info}/>
      <Route exact path="/Directory" component={Directory}/>
      <Route exact path="/HentaiZone" component={HentaiZone}/>
      <Route exact path="/Emision" component={Emision}/>
      <Route exact path="/MyList" component={MyList}/>
      <Route exact path="/Register" component={RegisterPage}/>
      <Route exact path="/Login" component={Login}/>
      <Route exact path="/Watch" component={Watch}/>
    </>
  );
}

export default App;

//https://help.disqus.com/en/articles/1717274-adding-comment-count-links-to-your-home-page
