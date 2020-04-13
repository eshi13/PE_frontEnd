import React, { Component } from 'react'
import background from '../images/background3.jpg'
import Header from '.././Header/Header'
import PropTypes from 'prop-types'



export class MenuItem extends Component {
    render() {
        return (
                <tr>
                    <td>
                        {this.props.menu.name}
                    </td>
                    <td>
                        {this.props.menu.protein}
                    </td>
                    <td>
                        {this.props.menu.vitamin}
                    </td>
                    <td>
                        {this.props.menu.fat}
                    </td>
                    <td>
                        {this.props.menu.calories}
                    </td>
                    <td>
                        {this.props.menu.iron}
                    </td>
                    <td>
                        {this.props.menu.calcium}
                    </td>
                    <td>
                        {this.props.menu.carb}
                    </td>
                </tr>
        )
    }
}
MenuItem.propTypes = {
    menu:PropTypes.object.isRequired

}

export default MenuItem
