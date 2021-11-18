import React from "react";
import '../styles/Logo.css';

class Logo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'Logo Here',
        }
    }

    render() {
        return(
            <button className="square" onClick={() => this.setState({value: 'Take Me Home!'})}>
                {this.state.value}
            </button>
        );
    }
}

export default Logo;