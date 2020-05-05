import React, { Component } from 'react'
import GaugeChart from 'react-gauge-chart'

export class BmiIndex extends Component {

    render() {
        console.log(this.props.Bmi.percent);
        return (
            <div>
                <GaugeChart id="gauge-chart4" 
                    nrOfLevels={4}  
                    cornerRadius={1} 
                    percent={this.props.Bmi.percent} 
                    hideText = {true}
/>
            </div>
        )
    }
}

export default BmiIndex
