import React from "react";
import '../styles/ProfileIcon.css';

class ProfileIcon extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'JD',
        }
    }

    render() {
        return(
            <button className="circle" onClick={() => this.setState({value: 'OK'})}>
                {this.state.value}
            </button>
        );
    }
}

export default ProfileIcon;