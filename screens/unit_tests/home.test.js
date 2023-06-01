import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import Home from '../home';

describe('Home component', () => {
  it('renders correctly', () => {
    const {getByTestId} = render(<Home />);
    const banner = getByTestId('banner');
    const startButton = getByTestId('start-button');

    expect(banner).toBeTruthy(); // Sprawdza czy element "banner" istnieje
    expect(startButton).toBeTruthy(); // Sprawdza czy element "start-button" istnieje
  });

  it('navigates to Categories screen on button press', () => {
    const navigation = {
      navigate: jest.fn(),
    };
    const {getByTestId} = render(<Home navigation={navigation} />);
    const startButton = getByTestId('start-button');

    fireEvent.press(startButton); // Wywołuje zdarzenie naciśnięcia na element "start-button"

    expect(navigation.navigate).toHaveBeenCalledWith('Categories'); // Sprawdza czy metoda navigate została wywołana z poprawnym argumentem 'Categories'
  });
});
