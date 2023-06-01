import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import Result from '../result';

describe('Result component', () => {
  it('displays the score and looser image if the score is less than 5', () => {
    const navigationMock = {navigate: jest.fn()};
    const score = 3;

    const {getByText, getByTestId} = render(
      <Result navigation={navigationMock} route={{params: {score}}} />,
    );

    expect(getByText('Your score:')).toBeTruthy();
    expect(getByText('3/10')).toBeTruthy(); // Sprawdza czy wyświetlany jest poprawny wynik

    const looserImage = getByTestId('looser-image');
    expect(looserImage.props.source).toEqual(
      require('../../components/looser.jpg'),
    ); // Sprawdza czy wyświetlany jest obrazek dla przegranego quizu
  });

  it('displays the score and winner image if the score is 5 or greater', () => {
    const navigationMock = {navigate: jest.fn()};
    const score = 8;

    const {getByText, getByTestId} = render(
      <Result navigation={navigationMock} route={{params: {score}}} />,
    );

    expect(getByText('Your score:')).toBeTruthy();
    expect(getByText('8/10')).toBeTruthy(); // Sprawdza czy wyświetlany jest poprawny wynik

    const winnerImage = getByTestId('winner-image');
    expect(winnerImage.props.source).toEqual(
      require('../../components/winner.jpg'),
    ); // Sprawdza czy wyświetlany jest obrazek dla wygranego quizu
  });

  it('navigates to Categories screen when "PLAY AGAIN" button is pressed', () => {
    const navigationMock = {navigate: jest.fn()};
    const score = 5;

    const {getByText} = render(
      <Result navigation={navigationMock} route={{params: {score}}} />,
    );

    fireEvent.press(getByText('PLAY AGAIN')); // Wywołuje zdarzenie naciśnięcia na przycisk PLAY AGAIN

    expect(navigationMock.navigate).toHaveBeenCalledWith('Categories'); // Sprawdza czy przycisk PLAY AGAIN uruchamia nawigację do Categories
  });

  it('navigates to Home screen when "GO TO HOME" button is pressed', () => {
    const navigationMock = {navigate: jest.fn()};
    const score = 7;

    const {getByText} = render(
      <Result navigation={navigationMock} route={{params: {score}}} />,
    );

    fireEvent.press(getByText('GO TO HOME')); // Wywołuje zdarzenie naciśnięcia na przycisk GO TO HOME

    expect(navigationMock.navigate).toHaveBeenCalledWith('Home'); // Sprawdza czy przycisk GO TO HOME uruchamia nawigację do Home
  });
});
