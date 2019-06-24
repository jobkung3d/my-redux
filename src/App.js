import React, { Component } from 'react'
import { connect } from 'react-redux'
import { increment, decrement } from './actions/action'


/*const App = ({ message, counter, dispatch }) => (
  <div>
  <div className="buttons">
    <button onClick={() => dispatch(increment(1))} className="button is-primary">
      +1
    </button>
    <button onClick={() => dispatch(increment(2))} className="button is-link">
      +2
    </button>
    <button onClick={() => dispatch(increment(3))} className="button is-info">
      +3
    </button>
  </div>

  <div className="buttons">
    <button onClick={() => dispatch(decrement(1))} className="button is-primary">
      -1
    </button>
    <button onClick={() => dispatch(decrement(2))} className="button is-link">
      -2
    </button>
    <button onClick={() => dispatch(decrement(3))} className="button is-info">
      -3
    </button>
  </div>
  </div>
)*/

class App extends Component {

  render(){
    const { dispatch } = this.props;
    return ( 
      <div className="container">
        <div className="columns column is-12">
          <h1>Counter : {this.props.counter}</h1>
        </div>

        <div className="buttons">
          <button className="button is-primary" onClick={() => dispatch(increment(1))}>+1</button>
          <button className="button is-link" onClick={() => dispatch(increment(2))}>+2</button>
          <button className="button is-info" onClick={() => dispatch(increment(3))}>+3</button>
        </div>

        <div className="buttons">
          <button className="button is-primary" onClick={() => dispatch(decrement(1))}>-1</button>
          <button className="button is-link" onClick={() => dispatch(decrement(2))}>-2</button>
          <button className="button is-info" onClick={() => dispatch(decrement(3))}>-3</button>
        </div>
      </div>
    );  
  }
}

const mapStateToProps = (state) => {
  return{
    message : 'This is message from mapStateToProps',
    counter : state.counter || 0
  }
}

const AppWithConnect = connect(mapStateToProps)(App)
 
export default AppWithConnect
