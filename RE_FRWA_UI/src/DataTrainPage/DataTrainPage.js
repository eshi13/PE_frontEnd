import React, { Component} from 'react';
import Header from '.././Header/Header'
import "./DataTrainPage.css"
import Webcam from 'react-webcam';
import WelcomeModal from '.././WelcomeModal/WelcomeModal';
import EnterName from './01_EnterName';
import EnterEmail from './02_EnterEmail';
import ClickPhoto from './03_ClickPhoto';
import background from '../images/background3.jpg'
import RegisterStudent from './04_Register';
import Diet from './05_Diet';


var cors = require('cors')


class DataTrainPage extends Component {

    state ={
        stage: "1",
        height: "",
        weight: "",
    }

    getName = (name) => {
        this.setState({
            name,
            stage: '2'
        })
    }

    getEmail = (email) => {
        this.setState({
            email,
            stage: '3'
        })
    }
    
    getImage = (image) => {
        this.setState({
            image,
            stage: '4'
        })
    }
    getHeight = (height) =>{
        this.setState({
            height
        })
    }
    getWeight = (weight) =>{
        this.setState({
            weight
        })
    }
    getAnaemia = (anaemia) =>{
        this.setState({
            anaemia
        })
    }
    getIron = (iron) =>{
        this.setState({
            iron
        })
    }
    getDiabetic = (diabetes) =>{
        this.setState({
            diabetes
        })
    }
    getCalcium = (calcium) => {
        this.setState({
            calcium
        })
    }
    getVitamin = (vitamin) =>{
        this.setState({
            vitamin
        })
    }
    getDiet = (dietinfo) => {
        console.log(this.state)
        this.setState({
            dietinfo,
            stage: '5'
        })
    }
    
    gotoStage1 = () => {
        this.setState({
            name: '',
            email: '',
            image: '',
            stage: '1'
        })
    }

    render() {
       console.log(this.state)
      return (
        <div className="dataTrainPage" style={{backgroundImage: "url("+background+")",backgroundSize: 'cover', overflow: 'hidden'}}>
        <Header logout={()=> this.props.logout()}/>
            <div className="mainDiv">
                {
                    this.state.stage == '1'?
                        <EnterName getName={(name)=>this.getName(name)}/>
                    :
                        this.state.stage == '2'?
                            <EnterEmail name={this.state.name} getEmail={(email)=>this.getEmail(email)}/>
                        :
                            this.state.stage == '3'?
                                <ClickPhoto name={this.state.name} getImage={(image)=>this.getImage(image)}/>
                            :
                                this.state.stage == '4'?
                                    <Diet name={this.state.name} getDiet = {() => this.getDiet()}
                                    getHeight = {(height)=>this.getHeight(height)} 
                                    getWeight={(weight)=>this.getWeight(weight)}
                                    getAnaemia={(anaemia)=>this.getAnaemia(anaemia)}
                                    getIron ={(iron) => this.getIron(iron)}
                                    getDiabetic ={(diabetes) => this.getDiabetic(diabetes)}
                                    getCalcium ={(calcium) => this.getCalcium(calcium)}
                                    getVitamin ={(vitamin) => this.getVitamin(vitamin)}/>
                                :
                                    <RegisterStudent data={this.state} gotoStage1={() => this.gotoStage1()}/>
                }
            </div>
        </div>
      )
    }
}
export default DataTrainPage
