//import React, { Component } from "react";
import React from "react";
import { Switch, Route} from 'react-router-dom';
import  Home  from "./pages/Home";
import { About } from "./pages/About";
import  CatA  from "./pages/CatA";
import  CatD  from "./pages/CatD";
import { Footer } from "./components/footer/Footer";
import './styleSrc.css';
import CatE from "./pages/CatE";
// import bgImg from './assets/img/introduction.jpg'

function App() {
  return (
    <div>
      {/* <div className='bgImg' style={{backgroundImage:`url(${bgImg}) `}}></div> */}
      <div >
        <Switch>
          {/* <Route path="/" exact component={Home}></Route> */}
          <Route path="/CatA" component={CatA}></Route>
          <Route path="/CatD" component={CatD}></Route>
          <Route path="/CatE" component={CatE}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/"  component={Home}></Route>
        </Switch>
      </div>
      <Footer></Footer>
    </div>
  );
}

// class App extends Component{

//   render(){

//     return(
//       <div>
//        <Navbar></Navbar>
//        <div className="Container pt-5 text-center">
//          <Switch>
//            <Route path="/" exact component={Home}></Route>
//            <Route path="/examin" component={Examin}></Route>
//            <Route path="/about" component={About}></Route>
//          </Switch>
//      </div>
//      </div>
//     )
//   }
// }

export default App;
