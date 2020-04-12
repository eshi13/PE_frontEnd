import React, { Component } from 'react'
import background from '../images/background3.jpg'
import Header from '.././Header/Header'

var cors = require('cors')


export class MenuPage extends Component {
    render() {
        return (
        <div className="dataTrainPage" style={{backgroundImage: "url("+background+")",backgroundSize: 'cover', overflow: 'hidden'}}>
        <Header logout={()=> this.props.logout()}/>
        </div>
        )
    }
}

export default MenuPage
