import React from "react";
import '../../styles/Scroll.css';

const Scroll = props => {
    return(
        <div style={{overflowX: 'scroll'}}>
            {props.children}
        </div>
    );
}

export default Scroll;