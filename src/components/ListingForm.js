import React from "react";
import "../styles/ListingForm.css";
const axios = require("axios");

class ListingForm extends React.Component {
  state = { name: "", yearSalary: 0, minExp: 0, description: "", tags: [] };
  handleChangename = (event) => {
    this.setState({ name: event.target.value });
  };
  handleChangeYearlySalary = (event) => {
    this.setState({ yearSalary: event.target.value });
  };
  handleMinExp = (event) => {
    this.setState({ minExp: event.target.value });
  };
  handleDesc = (event) => {
    this.setState({ description: event.target.value });
  };
  handleTags = (event) => {
    this.setState({ tags: event.target.value });
  };
  handleSubmit = () => {
    const address = `http://localhost:4000/positions/new`;
    //change address as per our needs
    axios.post(address, this.state).then(function (response) {
      console.log(response);
    });
  };

  render() {
    return (
      <div className="listing">
        <form action="/action_page.php" target="_blank">
          <input
            className="job-text"
            type="text"
            placeholder="New Job Listing e.g. Software Developer"
            required
            name="listing"
            onChange={this.handleChangename}
          />
          <br />
          <div className="textbox-container">
            <div className="col-50">
              <label for="salary">Yearly Salary:</label>
              <input
                className="entry-info"
                id="salary"
                type="text"
                placeholder=""
                required
                name="salary"
                onChange={this.handleChangeYearlySalary}
              />
            </div>
            <div className="col-50">
              <label for="exp">Minimum years of Exp:</label>
              <input
                className="entry-info"
                id="exp"
                type="text"
                placeholder=""
                required
                name="exp"
                onChange={this.handleMinExp}
              />
            </div>
          </div>
          <div className="slider-container">
            <div className="col-50">
              <input
                className="slider"
                type="range"
                min="0"
                max="50"
                value="25"
                id="SalarySlider"
              />
            </div>
            <div className="col-50">
              <input
                className="slider"
                type="range"
                min="0"
                max="50"
                value="25"
                id="ExpSlider"
              />
            </div>
          </div>
          <textarea
            className="paragraph-text"
            placeholder="Job Description"
            cols="30"
            rows="10"
            maxLength="500"
            onChange={this.handleDesc}
          />
          <br />
          <br />
          <input
            className="post-button"
            // type="submit"
            value="Post"
            onClick={() => this.handleSubmit()}
          />
        </form>
      </div>
    );
  }
}

export default ListingForm;
