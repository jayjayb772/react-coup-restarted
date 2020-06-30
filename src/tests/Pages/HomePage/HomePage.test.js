import React from 'react';
import { render } from '@testing-library/react';
import HomePage from '../../../Components/Pages/HomePage/HomePage';

test('renders two buttons with expected text', () => {
  const doc = render(<HomePage />);
  const join_btn = doc.container.getElementsByClassName("Join-button").item(0);
  const create_btn = doc.container.getElementsByClassName("Create-button").item(0);

  expect(join_btn).toBeInTheDocument();
  expect(create_btn).toBeInTheDocument();
});
