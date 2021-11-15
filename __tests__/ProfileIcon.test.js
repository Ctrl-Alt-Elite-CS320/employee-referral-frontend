import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react'
import ProfileIcon from '../src/components/ProfileIcon'


// Insert tests for the Profile Icon component here 

/*basic tests set up to ensure the component is being rendered 
  and if the component is behaving as intended onClick.
*/


it('checkProfileIconRendered', () => {
    const {queryByTitle} = render(<ProfileIcon />); 
    const icon = queryByTitle("ProfileIcon");
    expect(icon).toBeTruthy();
});

describe("clickProfileIcon", () => {
    it("onClick", () => {
        const {queryByTitle} = render(<ProfileIcon />); 
        const profileIcon = queryByTitle("ProfileIcon");
        expect(profileIcon.innerHTML).toBe('JD');
        fireEvent.click(profileIcon);
        expect(profileIcon.innerHTML).toBe('OK');
    })
}) 
