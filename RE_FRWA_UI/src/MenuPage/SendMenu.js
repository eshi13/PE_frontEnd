import React, { Component } from 'react'
import { Table } from 'reactstrap';
import MenuPage from './MenuPage'
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom'

export class SendMenu extends Component {
    state={
        data: '',
        nutritions : []
    }

    componentDidMount(){
        
        console.log(this.props.data)
        fetch('http://127.0.0.1:5000/api/menu' , {
                method: "POST",
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(this.props.data)
                })
                .then((result) => result.json())
                .then((info) => { 
                    var merged = [].concat.apply([], info['data']);
                    console.log(merged)
                    this.setState({
                    nutritions: merged
                })})

                    }
    
    render() {
        console.log(this.state.nutritions)
        return (
            <div style={{display:'flex',flexDirection:'column', alignItems:'center', marginBottom:20}}>
            <span style={{fontSize:40, fontWeight:'20px'}}>
                {this.state.data}
            </span>
            
            <div style={{display:'flex'}}>
                <Link to={"/menu"}>
                    <Button 
                        variant="contained" 
                        style={{backgroundColor:'black', color:'white', fontWeight:'bold', borderWidth:1, borderColor:'black', width:300, marginRight:15}}
                        onClick={()=>this.props.gotoStage1()}>Add another menu</Button>
                </Link>
                <Link to={"/recommend"}>
                    <Button 
                        variant="contained" 
                        style={{backgroundColor:'black', color:'white', fontWeight:'bold', borderWidth:1, borderColor:'black', width:300, marginLeft:15}}
                        >Go to Diet Recommendation</Button>
                </Link>
            </div>
        </div>
            
           
        )
    }
}

export default SendMenu
