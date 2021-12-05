import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';



function yearsvaluetext(value) {
    return `${value} yrs`;
  }

export default function DiscreteSlider() {
  return (
      // maybe adjust width
    <Box sx={{ width: 40 }}>
      <Slider
        aria-label="Years of Experience"
        defaultValue={0}
        getAriaValueText={yearsvaluetext}
        valueLabelDisplay="auto"
        step={1}
        marks
        min={0}
        max={40}
        valueLabelDisplay="on"
      />
      <Slider defaultValue={0} step={1} marks min={0} max={40} disabled />
    </Box>
    );



// lets you select a range

function salaryvaluetext(value) {
    return `${value}K`;
  }

export default function RangeSlider() {
  const [value, setValue] = React.useState([30, 50]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: 200 }}>
      <Slider
        getAriaLabel={() => 'Salary'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={salaryvaluetext}
      />
    </Box>
  );
}





}
