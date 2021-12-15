import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';


// range slider
// lets you select a range

function salaryvaluetext(value) {
    return `${value}K`;
  }
  
  export default function SalarySlider() {
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
  