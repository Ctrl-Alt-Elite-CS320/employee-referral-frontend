import "../styles/NewPosition.css";
import Logo from "../components/Logo.js";
import ProfileIcon from "../components/ProfileIcon";
import ListingForm from "../components/ListingForm";

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
            <ProfileIcon />
          </div>
        </div>
        <div className="listing-form">
          <ListingForm />
        </div>
    </div>
  );
}

export default NewPosition;