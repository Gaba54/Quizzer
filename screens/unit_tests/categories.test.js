import React from 'react';
import {render, waitFor, fireEvent} from '@testing-library/react-native';
import Categories from '../categories';
import fetchMock from 'jest-fetch-mock';
fetchMock.enableMocks();

describe('Categories component', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  // Test sprawdzający czy komponent renderuje stan ładowania na początku
  it('renders loading state initially', async () => {
    fetch.mockResponseOnce(JSON.stringify({trivia_categories: []}));

    const {getByText} = render(<Categories />);

    expect(getByText('LOADING...')).toBeTruthy();

    await waitFor(() => {
      expect(fetch).toHaveBeenCalledTimes(1); // Sprawdza czy funkcja fetch została wywołana raz
    });
  });

  // Test sprawdzający czy komponent renderuje kategorie po pobraniu danych
  it('renders categories after fetching data', async () => {
    const mockCategories = [
      {id: 9, name: 'General Knowledge'},
      {id: 10, name: 'Books'},
    ];
    fetch.mockResponseOnce(JSON.stringify({trivia_categories: mockCategories}));

    const {getByText} = render(<Categories />);

    await waitFor(() => {
      expect(fetch).toHaveBeenCalledTimes(1); // Sprawdza czy funkcja fetch została wywołana raz
    });

    expect(getByText('Categories available:')).toBeTruthy(); // Sprawdza czy etykieta "Categories available:" jest widoczna
    expect(getByText('General Knowledge')).toBeTruthy(); // Sprawdza czy etykieta "General Knowledge" jest widoczna
    expect(getByText('Books')).toBeTruthy(); // Sprawdza czy etykieta "Books" jest widoczna
  });

  // Test sprawdzający czy po kliknięciu na wybraną kategorię następuje nawigacja do CategoryDescription
  it('navigates to CategoryDescription screen when category item is pressed', async () => {
    const mockCategories = [
      {id: 9, name: 'General Knowledge'},
      {id: 10, name: 'Books'},
    ];
    fetch.mockResponseOnce(JSON.stringify({trivia_categories: mockCategories}));

    const navigationMock = {navigate: jest.fn()};

    const {getByText} = render(<Categories navigation={navigationMock} />);

    await waitFor(() => {
      expect(fetch).toHaveBeenCalledTimes(1); // Sprawdza czy funkcja fetch została wywołana raz
    });

    fireEvent.press(getByText('General Knowledge')); // Symuluje kliknięcie na element "General Knowledge"
    expect(navigationMock.navigate).toHaveBeenCalledWith(
      'CategoryDescription', // Sprawdza czy funkcja navigate została wywołana z odpowiednimi parametrami
      {
        category: mockCategories[0], // Sprawdza czy przekazano poprawną kategorię
      },
    );

    fireEvent.press(getByText('Books')); // Symuluje kliknięcie na element "Books"
    expect(navigationMock.navigate).toHaveBeenCalledWith(
      'CategoryDescription', // Sprawdza czy funkcja navigate została wywołana z odpowiednimi parametrami
      {
        category: mockCategories[1], // Sprawdza, czy przekazano poprawną kategorię
      },
    );
  });
});
