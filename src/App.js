import React from "react";
import './App.css';
import './index.css';
import { Switch, Route, } from 'react-router-dom';
import TopMenu from "./components/TopMenu";
import Register from "./pages/Register";
import About from "./pages/about/About";
import GetInvolved from "./pages/getinvolved/GetInvolved";
import Product from "./pages/product/Product";
import Home from "./pages/Home";
import {Link} from "react-router-dom";


function App() {
  return (
<>

 <TopMenu/>
    <Switch>
        <Route  path="/product">
            <Product />
        </Route>
        <Route path="/getinvolved">
            <GetInvolved />
        </Route>
        <Route path="/register">
            <Register />
        </Route>
        <Route path="/about">
            <About />
        </Route>
        <Route exact path="/">
            <Home />
        </Route>
    </Switch>



  <main>




  </main>

</>

  );
}

export default App;
