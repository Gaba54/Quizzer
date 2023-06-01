import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import CategoryDescription from '../categoryDescription';

// Test sprawdzający czy komponent CategoryDescription renderuje się poprawnie
it('renders CategoryDescription correctly', () => {
  const category = {id: 1, name: 'General Knowledge'};
  const navigationMock = {navigate: jest.fn()};
  const {getByText} = render(
    <CategoryDescription
      navigation={navigationMock}
      route={{params: {category}}}
    />,
  );

  // Sprawdza czy nazwa kategorii jest wyświetlana
  expect(getByText('General Knowledge')).toBeTruthy();

  // Sprawdza czy przyciski START i BACK TO LIST są widoczne
  expect(getByText('START')).toBeTruthy();
  expect(getByText('BACK TO LIST')).toBeTruthy();
});

// Test sprawdzający czy przycisk START uruchamia nawigację do Quizu z odpowiednimi parametrami
it('navigates to Quiz screen with correct parameters when START button is pressed', () => {
  const category = {id: 1, name: 'General Knowledge'};
  const navigationMock = {navigate: jest.fn()};
  const {getByText} = render(
    <CategoryDescription
      navigation={navigationMock}
      route={{params: {category}}}
    />,
  );

  fireEvent.press(getByText('START'));

  // Sprawdza czy funkcja navigate została wywołana z odpowiednimi parametrami
  expect(navigationMock.navigate).toHaveBeenCalledWith('Quiz', {
    category,
    checked: 'easy',
  });
});

// Test sprawdzający czy przycisk BACK TO LIST uruchamia nawigację do Categories
it('navigates to Categories screen when BACK TO LIST button is pressed', () => {
  const category = {id: 1, name: 'General Knowledge'};
  const navigationMock = {navigate: jest.fn()};
  const {getByText} = render(
    <CategoryDescription
      navigation={navigationMock}
      route={{params: {category}}}
    />,
  );

  fireEvent.press(getByText('BACK TO LIST'));

  // Sprawdza czy funkcja navigate została wywołana z odpowiednimi parametrami
  expect(navigationMock.navigate).toHaveBeenCalledWith('Categories');
});
