import React from "react";
import '../styles/Filters.css';
import YearSlider from './YearSlider.js'
import SalarySlider from './SalarySlider.js'


// figure out how to incorporate the functional slider components in here

class Filter extends React.Component {
    render() {
        return (
            <div>
                <br /><h2>Job Filters</h2><br />
                <h4>Salary</h4><br />
                <SalarySlider />
                <h4>Experience</h4><br />
                <YearSlider />
                <h4>Job type</h4><br />
                <form>
                    <label className="checkbox-container"> Finance
                        <input type="checkbox" />
                        <span className="checkmark" />
                    </label>
                    <label className="checkbox-container"> Management
                        <input type="checkbox" id="filter1" name="filter1" value="Management" />
                        <span className="checkmark" />
                    </label>
                    <label className="checkbox-container"> Engineering
                        <input type="checkbox" />
                        <span className="checkmark" />
                    </label>
                    <label className="checkbox-container"> Development
                        <input type="checkbox" />
                        <span className="checkmark" />
                    </label>
                    <label className="checkbox-container"> Test
                        <input type="checkbox" />
                        <span className="checkmark" />
                    </label>
                    <label className="checkbox-container"> Sales
                        <input type="checkbox" />
                        <span className="checkmark" />
                    </label>
                </form>
            </div>
        );
    }
}

export default Filter;