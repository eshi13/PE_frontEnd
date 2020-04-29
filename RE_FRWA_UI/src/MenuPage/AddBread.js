import React, { Component } from 'react'
import { TextField } from '@material-ui/core';
import { InputGroup, Button, ButtonGroup, InputGroupAddon, Input, Progress } from 'reactstrap';
import "./MenuPage.css"


export class AddBread extends Component {
    state ={
        bread: [],
        data: ''
}
handleChange(e) {
    this.setState({data: e.target.value});
}
onaddBread = (event) =>{
    event.preventDefault()
    var s = document.getElementById('bread').value
    const newItem = this.state.bread.slice() //copy the array
    newItem.push(s)
    this.setState({ bread: newItem,
                    data: '' },()=> {
        var  val = document.getElementById("bdata").value
        document.getElementById("bdata").value = val + " " + s
     });
}
onAddBread = (event) => {
    event.preventDefault()
    this.props.addBread(this.state)
    this.setState({
        bread:''
    })
  }
    render() {
        return (
            <div className = "menuPage">
                <div className = "mainDiv">
                <span style={{fontSize:40, fontWeight:'20px'}}>Let's Add Breads..</span>
                <InputGroup className = "inputG">
                    <Input 
                    placeholder = "Bread "
                    id="bread" 
                    value = {this.state.data}
                    name = "bread" 
                    inputProps={{style: { textAlign: "center", fontSize:20 }}}
                    underlineFocusStyle={{style: {borderWidth:20, borderColor:"white"}}}
                    onChange={this.handleChange.bind(this)}
                    />
                <InputGroupAddon addonType="append">
                <Button 
                    color="secondary" 
                    onClick={this.onaddBread}>+</Button>
                </InputGroupAddon>
                </InputGroup>
                <TextField
                    id="bdata"
                    label=""
                    InputProps={{
                        readOnly: true,
                      }}
                    placeholder="Breads"
                    multiline
                    variant="filled"
                /><br />
                <ButtonGroup>
                <Button 
                    color="success" 
                    onClick={this.onAddBread}>Next</Button>
                </ButtonGroup>
                <div className="text-center">57%</div>
                <Progress value = "57"/>
                </div>
            </div>
        )
    }
}

export default AddBread
