import React ,{Component} from 'react';
import './App.css';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';  

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
class Login extends Component{
    constructor(props){
        super(props);
        this.state={
            LoginUser:null,
            Password : null,
            valueTest:true,
                ErrorMessage:'',
            formErrors: {                
                email: "",
                password: ""
                
              }
        }
    }
    
    handleSubmit = e => {
        e.preventDefault();
   
        if (formValid(this.state)) {
           
            this.login();
        } else {
          console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
        }
      };
    
    componentDidMount(){
       // alert('Test');
    }
    Email=(event)=>{
        this.setState({
            LoginUser:event.target.value
        });
    }
    Password=(event)=>{
        this.setState({
            Password:event.target.value
        });
    }
    login=()=>{
     
        fetch('https://localhost:5001/Login', {  
            method: 'post',  
            headers: {  
                'Accept': 'application/json',  
                'Content-Type': 'application/json'  
            },  
            body: JSON.stringify({  
                Email: this.state.LoginUser,  
                Password: this.state.Password  
            })  
        }).then((Response) => Response.json())  
            .then((result) => {  
                debugger;
                console.log(result);  
                if (result == false)  {
                
                  this.forceUpdatedDom();
                
                }
                else{
                  this.forceUpdatedDom1();
                }
                   
                
            }) 

        
    }
    forceUpdatedDom=()=>
    {
        this.setState({ErrorMessage:'Login Filed'});
        this.forceUpdate();
    }
    forceUpdatedDom1=()=>{
      this.setState({ErrorMessage:'Successfully Login'});
      this.forceUpdate();
    }
    handleChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        let formErrors = { ...this.state.formErrors };
        
        switch (name) {          
          case "email":
            this.setState({LoginUser:value});
            formErrors.email = emailRegex.test(value)
              ? ""
              : "invalid email address";
              
            break;
          case "password":
              this.setState({Password:value})
            formErrors.password =
              value.length < 6 ? "minimum 6 characaters required" : "";
            break;
            
          default:
            break;
        }
    
        this.setState({ formErrors, [name]: value }, () => console.log(this.state));
      };
     
      
    render(){
        const { formErrors } = this.state;
        
        return(
            <div className="wrapper">
            <div className="form-wrapper">
                <div>
               
                </div>
            <form onSubmit={this.handleSubmit} noValidate>           
            
            <div className="email">
              <label htmlFor="email">User Name</label>
              <input
                className={formErrors.email.length > 0 ? "error" : null}
                placeholder="User Name"
                type="email"
                name="email"
               
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.email.length > 0 && (
                <span className="errorMessage">{formErrors.email}</span>
              )}
            </div>
            <div className="password">
              <label htmlFor="password">Password</label>
              <input
                className={formErrors.password.length > 0 ? "error" : null}
                placeholder="Password"
                type="password"
                name="password"
               
                noValidate
                
                onChange={this.handleChange}
              />
              {
                <span className="errorMessage">{formErrors.password}</span>
              }
               
            </div>
            <div className="createAccount">
              <button type="submit">Login</button>     
              {
                <span className="This is a info alert—check it out!">{this.state.ErrorMessage}</span>
                } 
            </div>
          </form>
                   
           
        </div>  
        </div>
        );
    }
}
export default Login;