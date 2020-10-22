import React, { Component } from 'react';
import './App.css';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import DirectURL from './components/DirectURL';

// export var toancuc = Parse.Object.extend('Post');
// export function api(a){

//   return a ||'default';
// }
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRenderStart: 1
    }
  }

  // renderFirst=() => {
  //   if(this.state.isRenderStart==1)
  //     return <Start renderHome={()=>this.renderHome()}></Start>
  //   else return (
  //     <div>
  //       <TopMenu></TopMenu>
  //       <DirectURL></DirectURL>
  //       <Footer></Footer>
  //     </div>
  //   )  
  // }
  // renderHome=() =>{
  //   this.setState({
  //     isRenderStart:2
  //   });
  // }
  render() {
    return (
      <Router>
        <div className="App">

          <DirectURL></DirectURL>
          {/* <form className="form ">
            <div className="form-group form-inline w-100">
              <label>label1</label>
              <input type="text" className="form-control"></input>
              <button className="btn btn-primary">button 1</button>
            </div>

            <div className="form-group">
              <label>label2</label>
              <input type="text" className="form-control"></input>
              <button className="btn btn-primary">button 2</button>
            </div>
          </form> */}
        </div>
      </Router>
    );
  }
}

export default App;
