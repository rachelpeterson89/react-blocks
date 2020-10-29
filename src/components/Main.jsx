import React, {Component} from 'react';

export default class Main extends Component {
    render() {
        return (
            <div className="col-9 bg-danger" style={{height: "600px"}}>
                {this.props.children}
            </div>
        )
    }
}