import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { App } from './App.jsx';

test('renders the required expo landing sections', () => {
  render(<App />);
  expect(screen.getByText(/Компания ISON представила новинки бренда/)).toBeInTheDocument();
  expect(screen.getByText('Посмотрите видео с выставки')).toBeInTheDocument();
  expect(screen.getByText('Полистайте каталог оборудования ISON')).toBeInTheDocument();
  expect(screen.getByText('Фото с выставки')).toBeInTheDocument();
});
