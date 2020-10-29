import React, {Component} from 'react';

export default class SubContent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            color: "yellow"
        }
    }

    render() {
        return (
            <div 
            onMouseOver={() => this.setState({color:"peachpuff"})}
            onMouseOut={() => this.setState({color:"yellow"})}
            className="col-9" style={{height: "400px", background: this.state.color}}
            ></div>
        )
    }
}