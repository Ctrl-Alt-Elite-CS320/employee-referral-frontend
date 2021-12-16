import "../styles/NewPosition.css";
import Logo from "../components/Logo.js";
import ListingForm from "../components/ListingForm";
import { Link } from "react-router-dom";
import { Button, Image } from "react-bootstrap";

function NewPosition() {
  return (
    <div className="NewPosition">
      <div className="position-header">
        <Logo />
        <div className="col-80">
          <h1>New Listing</h1>
          <h3>Manager</h3>
        </div>
        <div className="col-20">
          <Button>Logout</Button>
          <button className="circle" onClick={() => { }}>
            User
          </button>
        </div>
      </div>

      <div className="listing-form">
        <ListingForm />
      </div>

      <Link to="/">
        <div className="return-button">
          <h1>return</h1>
        </div>
      </Link>
    </div>
  );
}

export default NewPosition;