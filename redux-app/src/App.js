import React from 'react';
import {useSelector,useDispatch,connect} from 'react-redux';
import {Increment,Decrement,AddName} from './action';
import './App.css';
import TestData from './TestData';
import { Router,Redirect,Route } from 'react-router-dom';
import { useHistory } from "react-router";

let actiontype='INCREMENT';
const value = 20;
const Name = 'Venkat';
class App extends React.Component {

  handleOnClick = event => {
    debugger;
    actiontype = 'ADDNAME';
   this.props.AddName() // Code change: this.props.store.dispatch is no longer being called
   //this.props.dispatch({type:"INCREMENT",val:20})
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.handleOnClick}>
          Click
          </button>
        <p>{this.props.items}</p>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  debugger;
  return {
    items: state.counter.Name
  };
};

const mapDispatchToProps = dispatch => {
  return {
    AddName: () => {     
      dispatch({type:actiontype,val:Name})     
    },
    Increment: () => {     
      dispatch({type:actiontype,val:value})     
    }
  };
};

/* function App() {
  const history = useHistory();
          function Nexfun(){
            debugger;
            
            history.push({
              pathname:  "/TestData"
            
          });
          }
  const counter = useSelector(state=>state.counter.counter);

  const dispatch = useDispatch();
  return (
    <div className="App">
      <div>            
          
          <Route path="/TestData" component={TestData}/>
         
      </div>
     <h1>Counter{counter}</h1> 
 
      <button onClick={()=>{dispatch(Increment())}}>++</button> 
     
      <button onClick={()=>{dispatch(Decrement())}}>--</button>
     <button onClick={Nexfun}/>
    </div>
  );
} */

export default connect(mapStateToProps, mapDispatchToProps)(App);
