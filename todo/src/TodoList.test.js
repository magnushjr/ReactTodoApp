import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from './TodoList';

test('renders', () => {
   render(<TodoList />);
});

test('renders things', () => {
   render(<TodoList />);
   expect(screen.getByText(/You have/)).toHaveTextContent(/things to do/);
});

test('renders thing', () => {
   render(<TodoList items={["One"]} />);
   expect(screen.getByText(/You have/)).toHaveTextContent(/thing to do/);
});

test('adds item on submit from InputForm', () => {
   render(<TodoList />);
   const input = screen.getByRole('textbox');
   const button = screen.getByRole('button', { name: 'Add' });
   fireEvent.change(input, { target: { value: 'Test item' } });
   fireEvent.click(button);
   expect(screen.getByText('Test item')).toBeInTheDocument();
});
