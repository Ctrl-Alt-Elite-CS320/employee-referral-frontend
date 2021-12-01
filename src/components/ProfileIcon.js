import React from "react";
import '../styles/ProfileIcon.css';
import axios from "axios";
class ProfileIcon extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'JD',
        }
    }

    render() {
        return(
            <button className="circle" onClick={() => {
                
                sessionStorage.setItem('JWT', null);
                axios.defaults.headers.common.Authorization = null;
                this.props.setToken(null);
            }
            }>
                {this.state.value}
            </button>
        );
    }
}

export default ProfileIcon;