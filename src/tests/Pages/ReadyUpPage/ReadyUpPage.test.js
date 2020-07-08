import React from 'react';
import { render } from '@testing-library/react';
import ReadyUpPage from '../../../Components/Pages/ReadyUpPage/ReadyUpPage';
import {MemoryRouter} from 'react-router-dom';
import ReadyUpButton from "../../../Components/Pages/ReadyUpPage/ReadyUpButton";
test('renders two buttons with expected text', () => {
    const doc = render(
        <MemoryRouter initialEntries={["/ready-up/999/Jacob"]}>
            <ReadyUpPage />
        </MemoryRouter>
    );
    const btn = doc.container.getElementsByClassName("Buttons-paper").item(0);
    expect(btn).toBeInTheDocument();
});

test('button works', () => {
    const doc = render(
        <ReadyUpButton/>
    );
    const btn = doc.container.children.item(0);
    expect(doc.container.children.item(0).className).toBe("Ready-button");
    btn.click();
    expect(doc.container.children.item(0).className).toBe("UnReady-button");
    btn.click();
    expect(doc.container.children.item(0).className).toBe("Ready-button");

    expect(btn).toBeInTheDocument();
});

