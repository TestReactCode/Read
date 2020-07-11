import React, { Component } from "react";
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Img from './Image/Hori.png';
import ReactTooltip from "react-tooltip";
const techCompanies = [
  { value: "OFPR",label:"OFPR" },
  {  value: "BlueList",label: "BlueList"},
  {  value: "OON",label:"OON" },
  {  value: "Vendar" ,label:"Vendar"}
 
];
let search ='';
const edits = [{"value":"New Delhi","label":"New Delhi"},
{"value":"Hyderabad","label":"Hyderabad"},
{"value":"Chennai","label":"Chennai"},
{"value":"Bengaluru","label":"Bengaluru"}];
const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectOpt: [],
      searchEdit:'',
     
      startDate: new Date(),
      formErrors: {
        firstName: "",
        lastName: "",
        email: "",
        password: ""
      }
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    debugger;
    if (formValid(this.state)) {
     
      console.log(`
        --SUBMITTING--
        First Name: ${this.state.firstName}
        Last Name: ${this.state.lastName}
        Email: ${this.state.email}
        Password: ${this.state.password}
      `);
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  };

  handleChange = (selectOpt) => {
    debugger;
   this.setState({selectOpt},function(){
  
   
   });   
   search = selectOpt.label;
   this.fillEdits();
  };
  handleChangeDate=(e)=>{
    this.setState({startDate:e})
  }
  fillEdits=()=>{
    debugger;
    var str = 'Test';
    fetch('https://localhost:5001/Login', {  
      method: 'POST',  
      
      headers: {  
          'Accept': 'application/json',  
          'Content-Type': 'application/json'  
      },  
      body: JSON.stringify({  
        DbName: 'OFPR',
        EditName: 'R46N',
        ServerNameOne: 'MIG',
        ServerNameTwo:'Prod',
        TodaysDate:'2020-06-23' 
    })  
     
  }).then((Response) => Response.json())  
      .then((result) => {  
          debugger;
          console.log(result);  
          if (result == false)  {
          
           // this.forceUpdatedDom();
          
          }
          else{
          //  this.forceUpdatedDom1();
          }
             
          
      }) 
  }

  render() {
    const { stateInfo } = this.state;
  
    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <h1>Horizon Result Compare</h1>
          <form onSubmit={this.handleSubmit} noValidate>
          <div className="row1">
              <Select  options={ edits } placeholder="Select App..." />     
                  
          </div>
          <div className="row2">
         
          <Select  options={ techCompanies } 
          isMulti ={false}
          value= {stateInfo} 
          onChange={this.handleChange} ReactTooltip={"Test"} placeholder="Select Edits..." />
      
          </div>
          <div>
            
          </div>
          <div className="rowCh1">
          <label className="lbl1">
          Regular : {}
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} />
        </label>
          </div>

          <div className="row3">
          <label className="lbl2">
          PreProd-MIG : {}
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} />
        </label>
          </div>
          <div className="row4">
          <label className="lbl3">
          Prod : {}
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} />
        </label>  
          </div>      
          <div className="dateDiv">
          <label className="lblDate">Select Date {}
          <DatePicker 
        selected={this.state.startDate}
        onChange={this.handleChangeDate}
      />
      </label>
      </div>   
            
            <div className="createAccount">
              <button type="submit">Compare</button>              
            </div>
            <div>
              <center>
              <img src= {Img} alt="pic" />
              </center>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
