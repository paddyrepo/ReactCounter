import React from "react";

import { Component } from 'react'

export default class CounterClass extends Component {
    constructor(props){
        super(props)
        this.state = {
            count : 0, //Initialize count to 0
        }
    }
    incr = () => {
        this.setState({count : this.state.count+1})
    }

    decrease = () => {
        this.setState({count : this.state.count-1})
    }

    reset = () => {
        this.setState({count : 0})
    }
  render() {
    return (
        <div className='counter'>
            <p> Class</p>
        <p> Count : {this.state.count}</p>
        <button onClick={this.incr}>Increase</button>
      <button onClick={this.decrease}>decrease</button>
      <button onClick={this.reset}>reset</button>
      </div>
    )
  }
}
