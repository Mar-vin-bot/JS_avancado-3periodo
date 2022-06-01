import React, { Component } from 'react'


export default class Depoimento extends Component {


    render() {
        return (
            <div>
                <h3>{this.props.name}</h3>
                <img src={this.props.picture} alt="" /> 
                <p>{this.props.text}</p>
               
            </div>
        )
    }
}
