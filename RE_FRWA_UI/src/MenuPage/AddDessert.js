import React, { Component } from 'react'
import { TextField } from '@material-ui/core';
import { InputGroup, Button, ButtonGroup, InputGroupAddon, Input, Progress } from 'reactstrap';
import "./MenuPage.css"

export class AddDessert extends Component {
    state ={
        dessert: [],
        data: ''
}
handleChange(e) {
    this.setState({data: e.target.value});
}
onaddDessert = (event) =>{
    event.preventDefault()
    var s = document.getElementById('dessert').value
    const newItem = this.state.dessert.slice() //copy the array
    newItem.push(s)
    this.setState({ dessert: newItem,
                    data: '' },()=> {
        var  val = document.getElementById("ddata").value
        document.getElementById("ddata").value = val + " " + s
     });
}
onAddDessert = (event) => {
    event.preventDefault()
    this.props.addDessert(this.state)
    this.setState({
        dessert:''
    })
  }
    render() {
        return (
            <div className = "menuPage">
                <div className = "mainDiv">
                <span style={{fontSize:40, fontWeight:'20px'}}>Let's Add Desserts..</span>
                <InputGroup className = "inputG">
                    <Input
                    placeholder = "dessert "
                    id="dessert" 
                    value = {this.state.data}
                    name = "dessert" 
                    inputProps={{style: { textAlign: "center", fontSize:20 }}}
                    underlineFocusStyle={{style: {borderWidth:20, borderColor:"white"}}}
                    onChange={this.handleChange.bind(this)}
                    />
                    <InputGroupAddon addonType="append">
                    <Button 
                    color="secondary" 
                    onClick={this.onaddDessert}>+</Button>
                    </InputGroupAddon>
                    </InputGroup>
                <TextField
                    id="ddata"
                    label=""
                    InputProps={{
                        readOnly: true,
                      }}
                    placeholder="Desserts"
                    multiline
                    variant="filled"
                /><br />
                <ButtonGroup>
                <Button 
                    color="success" 
                    onClick={this.onAddDessert}>Done</Button>
                </ButtonGroup>
                <div className="text-center">86%</div>
                <Progress value= "86"/>
                </div>
            </div>
        )
    }
}

export default AddDessert
