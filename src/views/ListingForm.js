import React from "react";
import "../styles/ListingForm.css";
import ReactTagInput from "react-tag-input";
const axios = require("axios");

// function App() {
//   const [tags, setTags] = React.useState(["example tag"]);
//   return <ReactTagInput tags={tags} onChange={(newTags) => setTags(newTags)} />;
// }

class ListingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      salary: 0,
      minYearsExperience: 0,
      description: "",
      tags: [],
      empId: null,//get these from session information
      companyId: null,
    };
  }
  
  handleChangename = (event) => {
    this.setState({ title: event.target.value });
  };
  handleChangeYearlySalary = (event) => {
    this.setState({ salary: event.target.value });
  };
  handleMinExp = (event) => {
    this.setState({ minYearsExperience: event.target.value });
  };
  handleDesc = (event) => {
    this.setState({ description: event.target.value });
  };

  setTags = (newTags) => {
    this.setState({ tags: newTags });
  };
  // handleTags = (event) => {
  //   const string = event.target.value;
  //   let ans = string.split(",");
  //   this.setState({ tags: ans });
  // };
  handleSubmit = (e) => {
    e.preventDefault();
    //change address as per our needs
    try {
      axios.post('/positions/new', this.state).then(function (response) {
        console.log(response);
      });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div className="listing">
        <form>
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
              <label htmlFor="salary">Yearly Salary:</label>
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
              <label htmlFor="exp">Minimum years of Exp:</label>
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
          <textarea
            className="paragraph-text"
            placeholder="Job Description"
            cols="30"
            rows="10"
            maxLength="500"
            onChange={this.handleDesc}
          />
          <br />
          <ReactTagInput
            tags={this.state.tags}
            onChange={(newTags) => this.setTags(newTags)}
          />
          <br />
          <input
            className="post-button"
            // type="submit"
            value="Post"
            readOnly="true"
            onClick={() => this.handleSubmit()}
          />
        </form>
      </div>
    );
  }
}

export default ListingForm;