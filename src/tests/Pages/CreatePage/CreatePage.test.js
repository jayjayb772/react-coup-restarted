import React from 'react';
import { render } from '@testing-library/react';
import CreatePage from "../../../Components/Pages/CreatePage/CreatePage";

test('verifies form on page', () => {
    const doc = render(<CreatePage />);
    const createPage = doc.container.children.item(0);
    expect(createPage).toBeInTheDocument();
    const header = createPage.children.item(0);
    expect(header).toBeInTheDocument();
    const form = createPage.children.item(1);
    expect(form.children.item(0).className).toBe("container-fluid");
});
