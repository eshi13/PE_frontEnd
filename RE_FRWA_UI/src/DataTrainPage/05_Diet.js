import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormFeedback } from 'reactstrap';
import "./DataTrainPage.css"


function Diet(props) {
  console.log(props.valid)
  return  (   
    <div className = "outerStyle">
      <div className = "dietStyle rounded mb-0">
        <span style={{fontSize:20, fontWeight:'20px'}}>Hey {props.name}, help us plan a personalized diet recommendation for you..?</span>
        <Form>
        <div>{
          props.valid == '0' ? 
              <FormGroup row
              style = {{marginTop:10}}>
                    <Label for="uname" sm={6}>User Name</Label>
                    <Col sm={6}>
                      <Input required name="uname" id="uname" placeholder="User Name" 
                      onChange ={() =>props.getUname(document.getElementById('uname').value)}
                      inputProps={{style: { textAlign: "center", fontSize:20 }}}
                      underlineFocusStyle={{style: {borderWidth:20, borderColor:"white"}}}
                      />
                      
                    </Col>
                </FormGroup>
                :
                props.valid == '1' ?
                <FormGroup row
                style = {{marginTop:10}}>
                      <Label for="uname" sm={6}>User Name</Label>
                      <Col sm={6}>
                        <Input valid name="uname" id="uname" placeholder="User Name" 
                        onChange ={() =>props.getUname(document.getElementById('uname').value)}
                        inputProps={{style: { textAlign: "center", fontSize:20 }}}
                        underlineFocusStyle={{style: {borderWidth:20, borderColor:"white"}}}
                        />
                        <FormFeedback valid tooltip>Username available!</FormFeedback>
                      </Col>
                  </FormGroup>
                  :
                  <FormGroup row
                    style = {{marginTop:10}}>
                    <Label for="uname" sm={6}>User Name</Label>
                    <Col sm={6}>
                      <Input invalid name="uname" id="uname" placeholder="User Name" 
                      onChange ={() =>props.getUname(document.getElementById('uname').value)}
                      inputProps={{style: { textAlign: "center", fontSize:20 }}}
                      underlineFocusStyle={{style: {borderWidth:20, borderColor:"white"}}}
                      />
                      <FormFeedback>Username unavailable!!</FormFeedback>
                    </Col>
                </FormGroup>
            }
            </div>
            <FormGroup row>
              <Label for="height" sm={6}>Height</Label>
              <Col sm={6}>
                <Input  name="height" id="height" placeholder="Height" 
                onChange ={() =>props.getHeight(document.getElementById('height').value)}
                inputProps={{style: { textAlign: "center", fontSize:20 }}}
                underlineFocusStyle={{style: {borderWidth:20, borderColor:"white"}}}
                />
              </Col>
            </FormGroup>
        
            <FormGroup row>
              <Label for="weight" sm={6}>Weight</Label>
              <Col sm={6}>
              <Input  name="weight" id="weight" placeholder= "Weight" 
              onChange = {() => props.getWeight(document.getElementById('weight').value)}
              inputProps={{style: { textAlign: "center", fontSize:20 }}}
              underlineFocusStyle={{style: {borderWidth:20, borderColor:"white"}}}
            />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="age" sm={6}>Age</Label>
              <Col sm={6}>
              <Input  name="age" id="age" placeholder= "Enter Age" 
              onChange = {() => props.getAge(document.getElementById('age').value)}
              inputProps={{style: { textAlign: "center", fontSize:20 }}}
              underlineFocusStyle={{style: {borderWidth:20, borderColor:"white"}}}
            />
              </Col>
            </FormGroup>
            <FormGroup row>
            <Label for="gender" sm={6}>Gender </Label>
              <Col sm={6}>
                <Input type="select"
                name = "gender"
                id = "gender"
                inputProps={{style: { textAlign: "center", fontSize:30 }}}
                underlineFocusStyle={{style: {borderWidth:20, borderColor:"white"}}}
                onChange={() => props.getGender(document.getElementById('gender').value)}
                >
                  <option></option>
                  <option value = {0}>Female</option>
                  <option value = {1}>male</option>
                </Input>
              </Col>
            </FormGroup>      
            
        
        <FormGroup row>
        <Label for="diabetic" sm={6}>Diabetic ?</Label>
        <Col sm={6}>
          <Input type="select"
          name = "diabetic"
          id = "diabetic"
          inputProps={{style: { textAlign: "center", fontSize:30 }}}
          underlineFocusStyle={{style: {borderWidth:20, borderColor:"white"}}}
          onChange={() => props.getDiabetic(document.getElementById('diabetic').value)}
          >
            <option></option>
            <option value = {0}>No</option>
            <option value = {1}>Yes</option>
          </Input>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="iron" sm={6}>Iron Deficient ?</Label>
        <Col sm={6}>
          <Input type="select"
          name = "iron"
          id = "iron"
          inputProps={{style: { textAlign: "center", fontSize:30 }}}
          underlineFocusStyle={{style: {borderWidth:20, borderColor:"white"}}}
          onChange={() => props.getIron(document.getElementById('iron').value)}
          >
            <option></option>
            <option value = {0}>No</option>
            <option value = {1}>Yes</option>
          </Input>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="calcium" sm={6}>Calcium Deficient ?</Label>
        <Col sm={6}>
          <Input type="select"
          name = "calcium"
          id = "calcium"
           inputProps={{style: { textAlign: "center", fontSize:30 }}}
           underlineFocusStyle={{style: {borderWidth:20, borderColor:"white"}}}
           onChange={() => props.getCalcium(document.getElementById('calcium').value)}
          >
            <option></option>
            <option value = {0}>No</option>
            <option value = {1}>Yes</option>
          </Input>
        </Col>
        </FormGroup>
        <FormGroup row>
        <Label for="vitamin" sm={6}>Vitmain Deficient?</Label>
        <Col sm={6}>
          <Input type="select"
          name = "vitamin"
          id = "vitamin"
           inputProps={{style: { textAlign: "center", fontSize:30 }}}
           underlineFocusStyle={{style: {borderWidth:20, borderColor:"white"}}}
           onChange={() => props.getVitamin(document.getElementById('vitamin').value)}
          >
          <option></option>
          <option value={0}>No</option>
          <option value={1}>A</option>
          <option value={2}>B</option>
          <option value={3}>C</option>
          <option value={4}>D</option>
          <option value={5}>E</option>
          </Input>
        </Col>
        </FormGroup>
        </Form>
        <Button
          color="primary" 
          onClick={()=>props.getDiet()}
          >Done </Button>
          </div>
    </div>
  )
}
export default Diet;