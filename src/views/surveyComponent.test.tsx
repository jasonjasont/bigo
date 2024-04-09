import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import {SurveyComponent} from "./surveyComponent";
import {BrowserRouter} from "react-router-dom";

test('Calculate is disable while all part are not full filled', () => {
    render(<BrowserRouter>
        <SurveyComponent/>
    </BrowserRouter>);
    const calculateElement = screen.getByText(/C'est parti !/i);
    expect(calculateElement).toBeDisabled();
})

test('Calculate is enable when all part are full filled', () => {
    render(<BrowserRouter>
        <SurveyComponent/>
    </BrowserRouter>);
    const calculateElement = screen.getByText(/C'est parti !/i);

    fireEvent.click(screen.getByText('Avant 1945'))
    fireEvent.click(screen.getByText('Isolation du toit'))
    fireEvent.click(screen.getByText('Combles aménagés'))

    expect(calculateElement).toBeEnabled();
});
