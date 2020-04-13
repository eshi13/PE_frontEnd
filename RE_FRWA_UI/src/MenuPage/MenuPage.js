import React, { Component } from 'react'
import background from '../images/background3.jpg'
import Header from '.././Header/Header'
import MenuItem from './MenuItem'
import AddItem from'./AddItem'
import PropTypes from 'prop-types'
import uuid from 'uuid'

export class MenuPage extends Component {
    state = {
        menu: [
]
    }

    addItem = (item) =>{
        console.log(item)
        const newItem = {
            id:uuid.v4(),
            name: item.name,
            protein: item.protein,
            vitamin: item.vitamin,
            fat: item.fats,
            calories: item.calories,
            iron: item.iron,
            calcium: item.calcium,
            carb: item.carb
        }
        this.setState({menu: [...this.state.menu, newItem]})
    }
    render() {
        return (
        <div className="dataTrainPage" style={{backgroundImage: "url("+background+")",backgroundSize: 'cover', overflow: 'hidden'}}>
        <Header logout={()=> this.props.logout()}/>
        <AddItem addItem = {this.addItem}/>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
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
                    this.state.menu.map((item) =>(
                        <MenuItem menu = {item}/>
                    ))
                }
            </tbody>
        </table>
        
        </div>
        )
    }
    
}
MenuPage.propTypes = {
    menu:PropTypes.array.isRequired
}

export default MenuPage
