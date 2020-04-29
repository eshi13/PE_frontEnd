import React, { Component } from 'react'
import { TextField, Textarea } from '@material-ui/core';
import { InputGroup, Button, ButtonGroup, InputGroupAddon, Input, Progress } from 'reactstrap';
import "./MenuPage.css"

export class AddSalad extends Component {
    state ={
        salad:[],
        data: ''
}
handleChange(e) {
    this.setState({data: e.target.value});

}
onaddSalad = (event) =>{
    event.preventDefault()
    var s = document.getElementById('salad').value
    const newItem = this.state.salad.slice() //copy the array
    newItem.push(s)
    this.setState({ salad: newItem,
                    data: '' },()=> {
        var  val = document.getElementById("sadata").value
        document.getElementById("sadata").value = val + " " + s
     });
}
onAddSalad = (event) => {
    event.preventDefault()
    this.props.addSalad(this.state)
    this.setState({
        salad:''
    })
  }
    render() {
        return (
            <div className = "menuPage">
                <div className = "mainDiv">
                <span style={{fontSize:40, fontWeight:'20px'}}>Let's Add Salads..</span>
                <InputGroup className = "inputG">
                    <Input
                    placeholder = "salad "
                    id="salad" 
                    value = {this.state.data}
                    name = "salad" 
                    inputProps={{style: { textAlign: "center", fontSize:20 }}}
                    underlineFocusStyle={{style: {borderWidth:20, borderColor:"white"}}}
                    onChange={this.handleChange.bind(this)}
                    />
                
                <InputGroupAddon addonType="append">
                <Button 
                    variant="contained" 
                    onClick={this.onaddSalad}>+</Button>
                </InputGroupAddon>
                </InputGroup>

                <TextField
                    id="sadata"
                    label=""
                    InputProps={{
                        readOnly: true,
                      }}
                    placeholder="Salads"
                    multiline
                    variant="filled"
                /><br />
                <ButtonGroup>
                <Button 
                    color="success" 
                    onClick={this.onAddSalad}>Next</Button>
                </ButtonGroup>
                <div className="text-center">72%</div>
                <Progress value = "72"/>
                </div>
            </div>
        )
    }
}

export default AddSalad
