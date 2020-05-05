import React, { Component } from 'react'
import background from '../images/background3.jpg'
import Header from '.././Header/Header'
import Username from './UserName'
import Recommend from './Recommend'
import "./Recommend.css"

export class RecommendPage extends Component {
    state = {
        stage: '0',
        name : ''
    }
    getName = (uname) =>{
        this.setState({
            name : uname,
            stage: 1,
            nutrition:[]
        })

    }
    getData = () =>{
            console.log(this.state)
            fetch('http://127.0.0.1:5000/api/recommend' , {
                    method: "POST",
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify(this.state)
                    })
                    .then((result) => result.json())
                    .then((info) => { 
                        console.log(info)
                        this.setState({
                        nutrition: info['food']
                    })})
    }
    render() {
        return (
            <div className="dataTrainPage" style={{backgroundImage: "url("+background+")",backgroundSize: 'cover', overflow: 'hidden'}}>
                <Header logout={()=> this.props.logout()}/>
                    <div className = "mainDiv">
                {
                    this.state.stage == '0'?
                        <Username getName = {this.getName} />
                        :
                          <Recommend getData = {this.getData } data = {this.state} />
                }
                    </div>
            </div>
        )
    }
}

export default RecommendPage
