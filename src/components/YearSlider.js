import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

// discrete slider

function yearsvaluetext(value) {
    return `${value} yrs`;
  }

export default function YearSlider() {
  return (
      // maybe adjust width
    <Box sx={{ width: 200 }}>
      <Slider
        aria-label="Years of Experience"
        defaultValue={0}
        getAriaValueText={yearsvaluetext}
        valueLabelDisplay="auto"
        step={1}
        min={0}
        max={40}
        valueLabelDisplay="on"
      />
    </Box>
  );

}





