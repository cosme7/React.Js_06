import React, {Component} from "react";
import "./App.css";

export default class App extends Component{

  state = {
    number: 0
  }

  add = () => {
    if (this.state.number < 10){
      this.setState({
        number: this.state.number + 1
      })
    }
  }

  remove = () => {
    if (this.state.number > 0){
      this.setState({
        number: this.state.number - 1
      })
    }
  }

  render(){
    return(
      <div className="card-wrapper">
        <h1>Contador</h1>
        <div className="btn-wrapper">
          <button onClick={this.remove} className="btn-remove">-</button>
          <h2>{this.state.number}</h2>
          <button onClick={this.add} className="btn-add">+</button>
        </div>
      </div>
    )
  }
}
