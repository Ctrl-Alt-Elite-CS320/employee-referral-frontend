import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react'
import Filters from '../src/components/Filters'


// Insert tests for the Filters component here 
// Ensure that the outer div rendering the Filter component is being rendered
// Additional component testing will be added here later
// this test throws console error as proper event handler not associated with the form

it('checkJobFiltersRendered', () => {
    const {queryByTitle} = render(<Filters />); 
    const filters = queryByTitle("job-filters");
    expect(filters).toBeTruthy();
});
