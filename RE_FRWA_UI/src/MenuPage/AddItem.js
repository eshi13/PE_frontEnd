import React, { Component } from 'react'
import background from '../images/background3.jpg'
import Header from '.././Header/Header'
import MenuItem from './MenuItem'
import PropTypes from 'prop-types'
import { Button, TextField } from '@material-ui/core';

export class AddItem extends Component {
    state ={
            name :'',
            protein: '',
            vitamin: '',
            fats: '',
            calories: '',
            iron: '',
            calcium: '',
            carb: ''
    }
    handleChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    
    onSubmit = (event) => {
        event.preventDefault()
        this.props.addItem(this.state)
        this.setState({
            name :'',
            protein: '',
            vitamin: '',
            fats: '',
            calories: '',
            iron: '',
            calcium: '',
            carb: ''
        })
      }
    render() {
        return (
            <div>
            <form onSubmit={this.onSubmit}>

                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Protein</th>
                            <th>Vitamin</th>
                            <th>Fat</th>
                            <th>Calories</th>
                            <th>Iron</th>
                            <th>Calcium</th>
                            <th>Carb</th>
                            <th>Add</th>
                        </tr>
                    </thead>
                        
                            <tbody>
                            <tr>
                            <td>
                                <TextField id="name" label="Dish Name" name = "name" value = {this.state.name} onChange={this.handleChange.bind(this)} />
                            </td>
                            <td>
                                <TextField id="protein" label="Protein" name = "protein" value = {this.state.protein} onChange={this.handleChange.bind(this)}/>
                            </td>
                            <td>
                                <TextField id="vitamin" label="Vitamin" name = "vitamin" value = {this.state.vitamin} onChange={this.handleChange.bind(this)}/>
                            </td>
                            <td>
                                <TextField id="fats" label="Fats" name = "fats" value = {this.state.fats} onChange={this.handleChange.bind(this)}/>
                            </td>
                            <td>
                                <TextField id="calories" label="Calories" name = "calories" value = {this.state.calories} onChange={this.handleChange.bind(this)}/>
                            </td>
                            <td>
                                <TextField id="iron" label="Iron" name = "iron" value = {this.state.iron} onChange={this.handleChange.bind(this)}/>
                            </td>
                            <td>
                                <TextField id="calcium" label="Calcium" name= "calcium" value = {this.state.calcium} onChange={this.handleChange.bind(this)}/>
                            </td>
                            <td>
                                <TextField id="carb" label="carb" name = "carb" value = {this.state.carb} onChange={this.handleChange.bind(this)}/>
                            </td>
                            <td>
                                <Button
                                color="secondary"
                                type = "submit"
                                 >
                                Add
                                </Button>
                            </td>
                            </tr>
                            </tbody>
                            </table>
                        </form>  
                  
                
            </div>
        )
    }
}

export default AddItem
