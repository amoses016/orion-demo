import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import JokeList from './JokeList';

describe('<JokeList />', () => {
  test('it should mount', () => {
    render(<JokeList />);
    
    const jokeList = screen.getByTestId('JokeList');

    expect(jokeList).toBeInTheDocument();
  });
});