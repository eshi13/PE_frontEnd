import React, { Component } from 'react'
import { TextField } from '@material-ui/core';
import { InputGroup, Button, ButtonGroup, InputGroupAddon, Input, Progress } from 'reactstrap';
import "./MenuPage.css"

export class AddGravy extends Component {
    state ={
        gravy: [],
        data: ''
}
handleChange(e) {
    this.setState({data: e.target.value});

}
onaddGravy =(event) =>{
    event.preventDefault()
    var s = document.getElementById('gravy').value
    const newItem = this.state.gravy.slice() //copy the array
    newItem.push(s)
    this.setState({ gravy: newItem,
                    data: '' },()=> {
        var  val = document.getElementById("gdata").value
        document.getElementById("gdata").value = val + " " + s
     });
}
onAddGravy = (event) => {
    console.log(this.state.gravy)
    event.preventDefault()
    this.props.addGravy(this.state)
    this.setState({
        gravy:''
    })
  }
    render() {
        return (
            <div className = "menuPage">
                <div className = "mainDiv">
                <span style={{fontSize:40, fontWeight:'20px'}}>Let's Add Gravy..</span>
                <InputGroup className = "inputG">
                <Input 
                    placeholder = "Gravy "
                    id="gravy"                     
                    value = {this.state.data}
                    name = "gravy" 
                    inputProps={{style: { textAlign: "center", fontSize:20 }}}
                    underlineFocusStyle={{style: {borderWidth:20, borderColor:"white"}}}
                    onChange={this.handleChange.bind(this)}
                    />
                <InputGroupAddon addonType="append">
                <Button 
                    color ="secondary"
                    onClick={this.onaddGravy}>+</Button>
                </InputGroupAddon>
                </InputGroup>

                <TextField
                    
                    id="gdata"
                    label=""
                    InputProps={{
                        readOnly: true,
                    }}
                    placeholder="Veg Gravy"
                    multiline
                    variant="filled"
                /><br />
                <ButtonGroup>
                <Button 
                    color="success" 
                    onClick={this.onAddGravy}>Next</Button>
                </ButtonGroup>
                <div className="text-center">14%</div>
                <Progress value = "14"/>
                </div>
            </div>
        )
    }
}

export default AddGravy
