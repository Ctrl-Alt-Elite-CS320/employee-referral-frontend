import React, { useState } from "react";
import jobTypes from "../../data/jobTypes";
import '../../styles/Filters.css';

function FilterCheckbox(props) {
    const [Checked, setChecked] = useState([]);

    const handleToggle = (value) => {
        const currentIndex = Checked.indexOf(value);
        const newChecked = [...Checked];

        if(currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
        props.handleFilters(newChecked);
    }
    
    return (
        <div>
            {jobTypes.map((value, index) => (
                <label className="checkbox-container" key={index}> {value.type}
                    <input 
                        onChange={()=>handleToggle(value.id)}
                        type="checkbox"
                        checked={Checked.indexOf(value.id) === -1 ? false : true}
                    />
                    <span className="checkmark" />
                </label>
            ))}
        </div>
    );
}

export default FilterCheckbox;