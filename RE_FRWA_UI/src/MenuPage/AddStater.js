import React, { Component } from 'react'
import { TextField } from '@material-ui/core';
import { InputGroup, Button, ButtonGroup, InputGroupAddon, Input, Progress } from 'reactstrap';
import "./MenuPage.css"

export class AddStater extends Component {
    state ={
        starter: [],
        data : ''
}
handleChange(e) {
    this.setState({data: e.target.value});

}
onAddStarter = (event) => {
    event.preventDefault()
    var s = document.getElementById('starter').value
    const newItem = this.state.starter.slice() //copy the array
    newItem.push(s)
    this.setState({ starter: newItem,
                    data: '' },()=> {
        var  val = document.getElementById("stdata").value
        document.getElementById("stdata").value = val + " " + s
     });
    
    
}
onAddStarters = (event) => {
    event.preventDefault()
    this.props.addStarters(this.state)
    this.setState({
        starter:''
    })
  }
  
    render() {
        return (
            <div className = "menuPage">
                <div className = "mainDiv">
                <span style={{fontSize:40, fontWeight:'20px'}}>Let's Add Starters..</span>
                <InputGroup className = "inputG">
                    <Input 
                    placeholder = "Starter "
                    id="starter" 
                    value = {this.state.data}
                    name = "starter" 
                    inputProps={{style: { textAlign: "center", fontSize:20 }}}
                    underlineFocusStyle={{style: {borderWidth:20, borderColor:"white"}}}
                    onChange={this.handleChange.bind(this)}/>
                    <InputGroupAddon addonType="append">
                    <Button color ="secondary"
                    onClick={this.onAddStarter}
                    >+</Button>
                    </InputGroupAddon>
                    </InputGroup>
                
                <TextField
                    className = "textf"
                    id="stdata"
                    label=""
                    InputProps={{
                        readOnly: true,
                    }}
                    placeholder="Starters"
                    multiline
                    variant="filled"
                /><br/>
                <ButtonGroup>
                <Button 
                   color = "success" 
                onClick={this.onAddStarters}>Next</Button>
                </ButtonGroup>
                <div className="text-center">0%</div>
                <Progress />
                </div>
            </div>
        )
    }
}

export default AddStater
