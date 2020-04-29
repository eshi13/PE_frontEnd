import React, { Component } from 'react'
import background from '../images/background3.jpg'
import Header from '.././Header/Header'
import { Button, TextField } from '@material-ui/core';
import SendMenu from './SendMenu'
import AddBread from'./AddBread'
import AddGravy from './AddGravy'
import AddStater from'./AddStater'
import AddSalad from './AddSalad'
import AddDessert from './AddDessert'
import AddRice from './AddRice'
import AddDal from './AddDal'


export class MenuPage extends Component {
    state = {
       bread: [],
       gravy: [],
       starter: [],
       dal: [],
       rice: [], 
       salad: [], 
       dessert: [],
       stage: 0
                
    }

    addBread = (item) =>{
        const newItem = this.state.bread.slice() //copy the array
        newItem.push(item.bread)
        this.setState({
            bread: newItem,
            stage: 5  //set state of the weather5days
          },()=> {
             console.log(this.state.bread); 
          });
        
    }
    addGravy = (item) =>{
        const newItem = this.state.gravy.slice() //copy the array
        newItem.push(item.gravy)
        this.setState({
            gravy: newItem,
            stage: 2  //set state of the weather5days
          },()=> {
             console.log(this.state.gravy); 
          });
        
    }
    addStarters = (item) =>{
        const newItem = this.state.starter.slice() //copy the array
        newItem.push(item.starter)
        this.setState({
            starter: newItem,  //set state of the weather5days
            stage:1
          },()=> {
             console.log(this.state.starter); 
          });
        
    }
    addDal = (item) =>{
        const newItem = this.state.dal.slice() //copy the array
        newItem.push(item.dal)
        console.log(newItem)
        this.setState({
            dal: newItem,
            stage: 4  //set state of the weather5days
          },()=> {
             console.log(this.state.dal); 
          });
        
    }
    addRice = (item) =>{
        const newItem = this.state.rice.slice() //copy the array
        newItem.push(item.rice)
        console.log(newItem)
        this.setState({
            rice: newItem,
            stage: 3  //set state of the weather5days
          },()=> {
             console.log(this.state.rice); 
          });
        
    }
    addSalad = (item) =>{
        const newItem = this.state.salad.slice() //copy the array
        newItem.push(item.salad)
        console.log(newItem)
        this.setState({
            salad: newItem,
            stage: 6  //set state of the weather5days
          },()=> {
             console.log(this.state.salad); 
          });
    }
    addDessert = (item) =>{
        const newItem = this.state.dessert.slice() //copy the array
        newItem.push(item.dessert)
        console.log(newItem)
        this.setState({
            dessert: newItem,
            stage: 7  //set state of the weather5days
          },()=> {
             console.log(this.state.dessert); 
          });
        
    }
    onDone = () =>{
        this.setState({
            stage: 1
        })
    }
    gotoStage1 = () => {
        this.setState({
            bread: [],
            dal: [],
            dessert: [],
            gravy: [],
            rice: [],
            salad: [],
            starter:[],
            stage: '0'
        })
    }
    render() {
        console.log(this.state)
        return (
        <div className="dataTrainPage" style={{backgroundImage: "url("+background+")",backgroundSize: 'cover', overflow: 'hidden'}}>
        <Header logout={()=> this.props.logout()}/>{
            this.state.stage == '0'?
            <AddStater addStarters = { this.addStarters } />
                :
                this.state.stage == '1'?
                <AddGravy addGravy = { this.addGravy } />
                    :
                    this.state.stage == '2'?
                    <AddRice addRice = { this.addRice } />
                        :
                        this.state.stage == '3'?
                        <AddDal addDal = { this.addDal } />
                            :
                            this.state.stage == '4'?
                            <AddBread addBread = { this.addBread} />
                                :
                                this.state.stage == '5'?
                                <AddSalad addSalad = { this.addSalad } />
                                    :
                                    this.state.stage == '6'?
                                    <AddDessert addDessert = { this.addDessert } />
                    
                                        :
                                        <SendMenu data = {this.state} gotoStage1={() => this.gotoStage1()} />
        }
            
        </div>
        )
    }
    
}


export default MenuPage
