import React, { Component } from 'react'
import { TextField } from '@material-ui/core';
import { InputGroup, Button, ButtonGroup, InputGroupAddon, Input, Progress } from 'reactstrap';
import "./MenuPage.css"


export class AddRice extends Component {
    state ={
        rice: [],
        data: ''
}
handleChange(e) {
    this.setState({data: e.target.value});
}
onaddRice = (event) =>{
    event.preventDefault()
    var s = document.getElementById('rice').value
    const newItem = this.state.rice.slice() //copy the array
    newItem.push(s)
    this.setState({ rice: newItem,
                    data: '' },()=> {
        var  val = document.getElementById("rdata").value
        document.getElementById("rdata").value = val + " " + s
     });
}
onAddRice = (event) => {
    event.preventDefault()
    this.props.addRice(this.state)
    this.setState({
        rice:''
    })
  }
    render() {

        return (
            <div className = "menuPage">
                <div className = "mainDiv">
                <span style={{fontSize:40, fontWeight:'20px'}}>Let's Add Rice..</span>
                <InputGroup className = "inputG">
                    <Input 
                    placeholder = "rice "
                    id="rice" 
                    value = {this.state.data}
                    name = "rice" 
                    inputProps={{style: { textAlign: "center", fontSize:20 }}}
                    underlineFocusStyle={{style: {borderWidth:20, borderColor:"white"}}}
                    onChange={this.handleChange.bind(this)}
                    />
                    <InputGroupAddon addonType="append">
                    <Button 
                    color="secondary" 
                    onClick={this.onaddRice}>+</Button>
                    </InputGroupAddon>
                    </InputGroup>

                <TextField
                    id="rdata"
                    label=""
                    InputProps={{
                        readOnly: true,
                    }}
                    placeholder="Rice"
                    multiline
                    variant="filled"
                /><br />
                <ButtonGroup>
                <Button 
                    color="success" 
                    onClick={this.onAddRice}>Next</Button>
                </ButtonGroup>
                <div className="text-center">28%</div>
                <Progress value = "28"/>
                </div>
            </div>
        )
    }
}

export default AddRice
