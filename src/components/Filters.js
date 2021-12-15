import React, { useState } from "react";
import '../styles/Filters.css';
import SearchList from "./search/SearchList";

function Filter({ details }) {
    const [selectedField, setSelectedField] = useState([]);

    const filteredListings = details.filter(
        listing => {
            return (
                listing.type.includes(selectedField)
            );
        }
    );

    const handleSelect = e => {
        const isSelected = selectedField.includes(details.type);

        e = isSelected
        ? selectedField.filter(listing => listing !== details.type)
        : [...selectedField, details];
        setSelectedField(e);
    };

    function filterList() {
        return (
            <SearchList filteredListings={filteredListings} />
        );
    }

    return (
        <div>
            <br /><h2>Job Filters</h2><br />
            <h4>Salary</h4><br />
            <div className="silder-container">
                <input className="slider" type="range" min="0" max="50" value="25" id="salaryRange" />
                <p><span id="demo" /></p>
            </div><br />
            <h4>Experience</h4><br />
            <div className="silder-container">
                <input className="slider" type="range" min="0" max="50" value="25" id="experienceRange" />
            </div><br />
            <h4>Job type</h4><br />
            <form>
                <label className="checkbox-container">
                    <input
                        type="checkbox"
                        onChange={handleSelect}
                    />
                    <span className="checkmark" />
                </label>
                {filterList()}
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

export default Filter;