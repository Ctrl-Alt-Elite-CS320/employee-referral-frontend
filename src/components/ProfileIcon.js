import React from "react";
import '../styles/ProfileIcon.css';
import axios from "axios";
class ProfileIcon extends React.Component {
    constructor(props) {
        super(props);
        console.log("USer:" + props.userInfo);
        this.state = {
            value: props.userInfo.username?.split(' ').reduce((acc, e) => acc + e[0], "")
        }
    }

    render() {
        return(
            <button className="circle" onClick={() => { }
            }>
                {this.state.value}
            </button>
        );
    }
}

export default ProfileIcon;