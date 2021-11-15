import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react'
import Logo from '../src/components/Logo'


// Insert tests for the Logo component here 

/*basic tests set up to ensure the component is being rendered 
  and if the component is behaving as intended onClick.
*/

it('checkLogoRendered', () => {
    const {queryByTitle} = render(<Logo />); 
    const logo = queryByTitle("Logo");
    expect(logo).toBeTruthy();
});


describe("clickLogo", () => {
    it("onClick", () => {
        const {queryByTitle} = render(<Logo />); 
        const logo = queryByTitle("Logo");
        expect(logo.innerHTML).toBe('Logo Here');
        fireEvent.click(logo);
        expect(logo.innerHTML).toBe('Take Me Home!');
    })
}) 




