import React, { Component } from 'react'
import {  TextField } from '@material-ui/core';
import { InputGroup, Button, ButtonGroup, InputGroupAddon, Input, Progress } from 'reactstrap';
import "./MenuPage.css"


export class AddDal extends Component {
    state ={
        dal: [],
        data: ''
}
handleChange(e) {
    this.setState({data: e.target.value});
}
onaddDal = (event) =>{
    event.preventDefault()
    var s = document.getElementById('dal').value
    const newItem = this.state.dal.slice() //copy the array
    newItem.push(s)
    this.setState({ dal: newItem,
                    data: '' },()=> {
        var  val = document.getElementById("dadata").value
        document.getElementById("dadata").value = val + " " + s
     });
}
onAddDal = (event) => {
    event.preventDefault()
    this.props.addDal(this.state)
    this.setState({
        dal:''
    })
  }
    render() {
        return (
            <div className = "menuPage">
                <div className = "mainDiv">
                <span style={{fontSize:40, fontWeight:'20px'}}>Let's Add Dal..</span>
                <InputGroup className = "inputG">
                    <Input 
                    placeholder = "dal "
                    id="dal" 
                    value = {this.state.data}
                    name = "dal" 
                    inputProps={{style: { textAlign: "center", fontSize:20 }}}
                    underlineFocusStyle={{style: {borderWidth:20, borderColor:"white"}}}
                    onChange={this.handleChange.bind(this)}
                    />
                 <InputGroupAddon addonType="append">   
                <Button 
                    color="secondary" 
                    onClick={this.onaddDal}>+</Button>
                </InputGroupAddon>
                </InputGroup>
                <TextField
                    id="dadata"
                    label=""
                    InputProps={{
                        readOnly: true,
                    }}
                    placeholder="Dals"
                    multiline
                    variant="filled"
                /><br />
                <ButtonGroup>
                <Button 
                    color="success" 
                    onClick={this.onAddDal}>Next</Button>
                </ButtonGroup>
                <div className="text-center">42%</div>
                <Progress value = "42"/>
                </div>
            </div>
            
        )
    }
}

export default AddDal
