import { render, screen, fireEvent } from '@testing-library/react';
import InputForm from './InputForm';

test('Calls onSubmit prop with value on submit', () => {
   let submittedValue = "";
   
   render(<InputForm prompt="Add" onSubmit={(value) => {submittedValue = value}}/>);
   const input = screen.getByRole('textbox');
   const button = screen.getByRole('button', { name: 'Add' });
   
   fireEvent.change(input, { target: { value: 'Test item' } });
   fireEvent.click(button);
   expect(submittedValue).toBe("Test item");
});
