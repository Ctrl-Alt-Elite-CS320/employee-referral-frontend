import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react'
import ReferCandidate from '../src/components/ReferCandidate'


// Insert tests for the ReferCandidate component here 
// Ensure that the outer div rendering the ReferCandidate component is being rendered
// Additional component testing will be added here later

it('checkReferCandidateRendered', () => {
    const {queryByTitle} = render(<ReferCandidate />); 
    const referCandidate = queryByTitle("refer");
    expect(referCandidate).toBeTruthy();
});
