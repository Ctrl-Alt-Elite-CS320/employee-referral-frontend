import React from "react";
import '../styles/Logo.css';
import { Link } from "react-router-dom";

function Logo() {
    return (
        <div>
            <Link to="/" replace>
                <h2 className="logo">Sinecure</h2>
            </Link>
        </div>
    );
}

export default Logo;