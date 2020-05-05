import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';
import background from '../images/background3.jpg'
import menu from '../images/menu.jpg'
import iron from '../images/iron.jpg'
import vitamin from '../images/vitamin.jpg'
import calcium from '../images/calcium.jpeg'
import diabetes from '../images/diabetes.jpeg'
import BmiIndex from './BmiIndex'
import { ListGroup, ListGroupItem } from 'reactstrap';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

export class Recommend extends Component {
    state = {
        diet: {
            data: {
                food : [],
                bmi: '',
                sl: '',
                bmi_cat: ""
            },
            nutrients :{
                vitamin_list: [],
                vitamin: '',
                iron: [],
                calcium: [],
                calories: [],
                diabetes: []
            }
        }
    }
    componentDidMount(){
        console.log("did reach here")
        fetch('http://127.0.0.1:5000/api/recommend' , {
                    method: "POST",
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify(this.props.data)
                    })
                    .then((result) => result.json())
                    .then((info) => { 
                        console.log(info)
                        this.setState({
                            diet: info
                        })
                        })
    }
    render() {
        console.log(this.props.data)
        console.log(this.state.diet)
        return (
            <div className = "outerStyle">
                <div className = "dietStyle rounded ">
                <Row>
                    <Col>
                
                        Hey <b>{this.props.data.name}</b> , let's create a diet chart for you!!
                    
                    </Col>
                </Row>
                <Row xs = "12">
                    <Col >
                    <div>
                        <Card>
                            <CardBody>
                                <BmiIndex Bmi = {this.state.diet}/>
                                <CardTitle>Your BMI = {this.state.diet.data.bmi}</CardTitle>
                                <CardSubtitle>You are <b>{this.state.diet.data.bmi_cat }</b></CardSubtitle>
                                <CardText>
                                    {this.state.diet.nutrients.calories.length > 0 ?
                                        <div>
                                            <span>You need to eat more:</span>
                                           <ListGroup horizontal>
                                            <ListGroupItem>{this.state.diet.nutrients.calories[0]}</ListGroupItem>
                                            <ListGroupItem>{this.state.diet.nutrients.calories[1]}</ListGroupItem>                                            
                                            <ListGroupItem>{this.state.diet.nutrients.calories[2]}</ListGroupItem>
                                            <ListGroupItem>{this.state.diet.nutrients.calories[3]}</ListGroupItem>
                                            <ListGroupItem>{this.state.diet.nutrients.calories[4]}</ListGroupItem>                                         
                                            </ListGroup> 
                                        </div> :
                                        <div>You are fit, exercise more often</div>}
                                </CardText>
                            </CardBody>
                        </Card>
                    </div>
                    </Col>
                    <Col>
                    <div>
                        <Card>
                            <CardImg top width="100%" src={menu} alt="Card image cap" />
                            <CardBody>
                            <CardTitle>Today's recommendation</CardTitle>
                            <CardText>
                                <div>
                                <ListGroup horizontal>
                                    {this.state.diet.data.food.map((row) =>
                                    <ListGroupItem>{row}</ListGroupItem>
                                    )}
                                </ListGroup>
                                </div>
                            </CardText>
                            </CardBody>
                        </Card>
                    </div>
                    </Col>
                    
                </Row>
                <Row xs = "12">
                    <Col>
                    <div>
                        <Card>
                            <CardImg top width="100%" src={iron} alt="Card image cap" />
                            <CardBody>
                            <CardTitle>Iron</CardTitle>
                            <CardText>
                            {
                            this.state.diet.nutrients.iron.length > 0 ?
                            <div>
                                <b>You should eat more :</b>
                                    <ListGroup horizontal>
                                            <ListGroupItem>{this.state.diet.nutrients.iron[0]}</ListGroupItem>
                                            <ListGroupItem>{this.state.diet.nutrients.iron[1]}</ListGroupItem>                                            
                                            <ListGroupItem>{this.state.diet.nutrients.iron[2]}</ListGroupItem>
                                            <ListGroupItem>{this.state.diet.nutrients.iron[3]}</ListGroupItem>
                                            <ListGroupItem>{this.state.diet.nutrients.iron[4]}</ListGroupItem>                                         
                                        </ListGroup>
                            </div>:
                            <div>Great!! You do not have any defieciency. But keep eating healthy food. </div>
                        }
                            </CardText>
                            </CardBody>
                        </Card>
                    </div>
                    </Col>
                    <Col>
                    <div>
                        <Card>
                            <CardImg top width="100%" src={calcium} alt="Card image cap" />
                            <CardBody>
                            <CardTitle>Calcium</CardTitle>
                            <CardText>
                            {
                            this.state.diet.nutrients.calcium.length > 0 ?
                            <div>
                                <b>You should eat more :</b>
                                    <ListGroup horizontal>
                                            <ListGroupItem>{this.state.diet.nutrients.calcium[0]}</ListGroupItem>
                                            <ListGroupItem>{this.state.diet.nutrients.calcium[1]}</ListGroupItem>                                            
                                            <ListGroupItem>{this.state.diet.nutrients.calcium[2]}</ListGroupItem>
                                            <ListGroupItem>{this.state.diet.nutrients.calcium[3]}</ListGroupItem>
                                            <ListGroupItem>{this.state.diet.nutrients.calcium[4]}</ListGroupItem>                                         
                                        </ListGroup>
                            </div>:
                            <div>Great!! You do not have any defieciency. But keep eating healthy food. </div>
                        }
                            </CardText>
                            </CardBody>
                        </Card>
                    </div>
                    </Col>
                    </Row>
                    <Row>
                    <Col>
                    <div>
                    <Card>
                        <CardImg className = "card-img-top-vitamin" top width="100%" src={vitamin} alt="Card image cap" />
                        <CardBody>
                        <CardTitle>Vitamin</CardTitle>
                        <CardText>
                        {
                            this.state.diet.nutrients.vitamin_list.length > 0 ?
                            <div>
                                <b>You are deficient in vitamin {this.state.diet.nutrients.vitamin}. You should eat more :</b>
                                    <ListGroup horizontal>
                                            <ListGroupItem>{this.state.diet.nutrients.vitamin_list[0]}</ListGroupItem>
                                            <ListGroupItem>{this.state.diet.nutrients.vitamin_list[1]}</ListGroupItem>                                            
                                            <ListGroupItem>{this.state.diet.nutrients.vitamin_list[2]}</ListGroupItem>
                                            <ListGroupItem>{this.state.diet.nutrients.vitamin_list[3]}</ListGroupItem>
                                            <ListGroupItem>{this.state.diet.nutrients.vitamin_list[4]}</ListGroupItem>                                         
                                        </ListGroup>
                            </div>:
                            <div>Great!! You do not have any defieciency. But keep eating healthy food. </div>
                        }
                        </CardText>
                        </CardBody>
                    </Card>
                    </div>
                    </Col>
                    <Col>
                    <div>
                    <Card>
                        <CardImg className = "card-img-top-diabetes" top width="100%" src={diabetes} alt="Card image cap" />
                        <CardBody>
                        <CardTitle>Diabetes</CardTitle>
                        <CardText>{
                            this.state.diet.nutrients.diabetes.length > 0 ?
                            <div>
                                <b>You should eat more :</b>
                                    <ListGroup horizontal>
                                            <ListGroupItem>{this.state.diet.nutrients.diabetes[0]}</ListGroupItem>
                                            <ListGroupItem>{this.state.diet.nutrients.diabetes[1]}</ListGroupItem>                                            
                                            <ListGroupItem>{this.state.diet.nutrients.diabetes[2]}</ListGroupItem>
                                            <ListGroupItem>{this.state.diet.nutrients.diabetes[3]}</ListGroupItem>
                                            <ListGroupItem>{this.state.diet.nutrients.diabetes[4]}</ListGroupItem>                                         
                                        </ListGroup>
                            </div>:
                            <div>Great!! You do not have diabetes. But keep eating healthy food.</div>
                        }</CardText>
                        </CardBody>
                    </Card>
                    </div>
                    </Col>
                </Row>
                
                </div>
            </div>
            
        )
    }
}

export default Recommend
