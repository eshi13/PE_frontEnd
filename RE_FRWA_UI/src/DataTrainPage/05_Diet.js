import React from 'react';
import { Button, TextField, Select, InputLabel } from '@material-ui/core';


function Diet(props) {
  return  (
    
    <div style={{display:'flex',flexDirection:'column', alignItems:'center'}}>
        <span style={{fontSize:40, fontWeight:'20px'}}>Hey {props.name}, help us plan your diet chart?</span>
        <form >
        <TextField 
            id="height" 
            placeholder = "height"
            name = "height"
            onChange ={() =>props.getHeight(document.getElementById('height').value)}
            style={{width:300, marginBottom:10, marginTop:10, marginRight:20, marginLeft:100}} 
            inputProps={{style: { textAlign: "center", fontSize:20 }}}
            underlineFocusStyle={{style: {borderWidth:20, borderColor:"white"}}}
            />
        <TextField 
            id="weight" 
            placeholder = "weight"
            name = "weight"
            onChange = {() => props.getWeight(document.getElementById('weight').value)}
            style={{width:300, marginBottom:10, marginTop:10}} 
            inputProps={{style: { textAlign: "center", fontSize:20 }}}
            underlineFocusStyle={{style: {borderWidth:20, borderColor:"white"}}}
            />
        <Select
          native
          style={{width:600, marginBottom:10, marginTop:10, marginLeft:100}} 
          inputProps={{style: { textAlign: "center", fontSize:30 }}}
          underlineFocusStyle={{style: {borderWidth:20, borderColor:"white"}}}
          onChange={() => props.getAnaemia(document.getElementById('anaemic').value)}
          inputProps={{
            name: 'anaemic',
            id: 'anaemic',
          }}
        >
          <option>Are you anameic?</option>
          <option value={0}>No</option>
          <option value={1}>Yes</option>
        </Select>
        <Select
          native
          style={{width:600, marginBottom:10, marginTop:10, marginLeft:100}} 
          inputProps={{style: { textAlign: "center", fontSize:30 }}}
          underlineFocusStyle={{style: {borderWidth:20, borderColor:"white"}}}
          onChange={() => props.getIron(document.getElementById('iron').value)}
          inputProps={{
            name: 'iron',
            id: 'iron',
          }}
        >
          <option>Are you Iron deficient?</option>
          <option value={0}>No</option>
          <option value={1}>Yes</option>
        </Select>
        <Select
          native
          style={{width:600, marginBottom:10, marginTop:10, marginLeft:100}} 
          inputProps={{style: { textAlign: "center", fontSize:30 }}}
          underlineFocusStyle={{style: {borderWidth:20, borderColor:"white"}}}
          onChange={() => props.getDiabetic(document.getElementById('diabetic').value)}
          inputProps={{
            name: 'diabetic',
            id: 'diabetic',
          }}
        >
          <option>Do you have diabetes?</option>
          <option value={0}>No</option>
          <option value={1}>Yes</option>
        </Select>
        <Select
          native
          style={{width:600, marginBottom:10, marginTop:10, marginLeft:100}} 
          inputProps={{style: { textAlign: "center", fontSize:30 }}}
          underlineFocusStyle={{style: {borderWidth:20, borderColor:"white"}}}
          onChange={() => props.getCalcium(document.getElementById('calcium').value)}
          inputProps={{
            name: 'calcium',
            id: 'calcium',
          }}
        >
          <option>Are you calcium deficient?</option>
          <option value={0}>No</option>
          <option value={1}>Yes</option>
        </Select>
        <Select
          native
          style={{width:600, marginBottom:10, marginTop:10, marginLeft:100}} 
          inputProps={{style: { textAlign: "center", fontSize:30 }}}
          underlineFocusStyle={{style: {borderWidth:20, borderColor:"white"}}}
          onChange={() => props.getVitamin(document.getElementById('vitamin').value)}
          inputProps={{
            name: 'vitamin',
            id: 'vitamin',
          }}
        >
          <option>Do you have deficiency of any vitamins?</option>
          <option value={0}>No</option>
          <option value={1}>A</option>
          <option value={2}>B</option>
          <option value={3}>C</option>
          <option value={4}>D</option>
          <option value={5}>E</option>
        </Select>  
        </form>
        <Button
          variant="contained" 
          style={{backgroundColor:'black', color:'white', fontWeight:'bold', borderWidth:1, borderColor:'black', width:200}}
          onClick={()=>props.getDiet()}
          >Done </Button>
    </div>
  )
}
export default Diet;