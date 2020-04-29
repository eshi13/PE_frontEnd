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
            
            <div style = {{ marginTop:10}}>
                <Table dark>
                <thead>
                    <tr>
                    <th>Dish Name</th>
                    <th>Protein</th>
                    <th>Vitamin</th>
                    <th>Fats</th>
                    <th>Calories</th>
                    <th>Iron</th>
                    <th>Calcium</th>
                    <th>Carb</th>
                    </tr>
                </thead>

                <tbody>
                    {
                    this.state.nutritions.map((row) => (
                    <tr >

                    <td>{row[0]}</td>
                    <td>{row[1]}</td>
                    <td>{row[2]}</td>
                    <td>{row[3]}</td>
                    <td>{row[4]}</td>
                    <td>{row[5]}</td>
                    <td>{row[6]}</td>
                    <td>{row[7]}</td>
                    </tr>
                    )) 
                    }
                </tbody>
                </Table>
                
                
            </div>
        )
    }
}

export default SendMenu
