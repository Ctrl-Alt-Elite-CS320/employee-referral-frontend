import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react'
import Logo from '../components/Logo'


// afterEach(() => server.resetHandlers())

test("clicking on logo component changes text to 'take me home'", () => {
    const { container, getByText } = render(
        // not sure if this is right
        <Logo logo = 'Logo Here'/>,
    );

    const button = getByText("Logo Here")
    fireEvent.click(button)
    expect(screen.getByRole('button').textContent).toBe('Take Me Home!')
})
    

    