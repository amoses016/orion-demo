import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LikeToggle from './LikeToggle';

describe('<Toggle />', () => {
  test('it should mount', () => {
    render(<LikeToggle />);
    
    const toggle = screen.getByTestId('Toggle');

    expect(toggle).toBeInTheDocument();
  });
});