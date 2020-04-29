import React, { Component } from 'react'

export class Recommend extends Component {
    componentDidMount(){
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
                        })
    }
    render() {
        console.log(this.props.data)
        return (
            <div>
                
            </div>
        )
    }
}

export default Recommend
