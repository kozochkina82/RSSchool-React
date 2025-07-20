import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Card from './Card'; // Исправлен импорт с Button на Card

const mockData = {
  image: 'pokemon-image.jpg',
  name: 'Pikachu',
  types: ['Electric', 'Mouse']
};

describe('Card component', () => {
  it('renders correctly with provided props', () => {
    render(<Card image={mockData.image} name={mockData.name} types={mockData.types} />);

    const image = screen.getByAltText(mockData.name);
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', mockData.image);

    // Проверяем заголовок
    expect(screen.getByText(mockData.name)).toBeInTheDocument();

    // Проверяем типы
    const typesText = `Types: ${mockData.types.join(', ')}`;
    expect(screen.getByText(typesText)).toBeInTheDocument();
  });

  it('renders without types if types array is empty', () => {
    render(<Card image={mockData.image} name={mockData.name} types={[]} />);

    expect(screen.queryByText(/Types:/)).not.toBeInTheDocument();
  });
});