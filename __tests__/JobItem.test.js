import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react'
import JobItem from '../src/components/JobItem'


// Insert tests for the JobItem component here 
// Ensure that the outer div rendering the JobItem component is being rendered
// Additional component testing will be added here later


it('checkJobItemRendered', () => {
    const {queryByTitle} = render(<JobItem />); 
    const jobItem = queryByTitle("job-item-title");
    expect(jobItem).toBeTruthy();
});




