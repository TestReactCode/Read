import React,{Component} from 'react';

import { Button, Card, CardFooter, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
class Reg extends Component{
    constructor(props){
        super(props);
        this.state = {
            EmployeeName:'',
            City: '',  
            Email: '',  
            Password: '',  
            Department: ''
        }
    }

    employName=(event)=>{
        this.setState({
            EmployeeName:event.target.value
        })
    }
    email=(event)=>{
        this.setState({
            Email:event.target.value
        })
    }
    password=(event)=>{
        this.setState({
            Password:event.target.value
        })
    }
    deartment=(event)=>{
        this.setState({
            Department:event.target.value
        })
    }

    render(){
        return(
            <div className="app flex-row align-items-center">  
            <Container>  
              <Row className="justify-content-center">  
                <Col md="9" lg="7" xl="6">  
                  <Card className="mx-4">  
                    <CardBody className="p-4">  
                    <Form>
                    <div className="row" className="mb-2 pageheading">  
                      <div className="col-sm-12 btn btn-primary">  
                        Sign Up  
                        </div>  
                    </div>  
                    <InputGroup className="mb-3">
                        <Input type="text" onChange={this.employName} placeholder="Enter Employee Name"/>                        
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <Input type="text" onChange={this.email} placeholder="Enter Email"/>                        
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <Input type="text" onChange={this.password} placeholder="Enter Passowrd"/>                        
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <Input type="text" onChange={this.deartment} placeholder="Enter Deartment"/>                        
                    </InputGroup>
                    </Form>
                    </CardBody>  
              </Card>  
            </Col>  
          </Row>  
        </Container>  
        </div>
        )
    }
}
export default Reg;