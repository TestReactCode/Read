import React from 'react';
import store from './store';


class TestData extends React.Component {
    // grab current state
    constructor(pros){
        super(pros);
        this.state={
            Name :'',
            Count:0
        }
    }
    
    CurrentVal=()=>{
        debugger;
        const t = store.getState(); 
        this.setState({Count:t.counter.counter});
    }
    render(){
    debugger;
   //let str = store.getState(); 
   return (
            <div>
             
              <button onClick={this.CurrentVal}/>
              {this.state.Count}
            </div>
   );
    }
  }
  export default TestData;