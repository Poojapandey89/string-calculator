/**
 * @format
 */

import 'react-native';
import React from 'react';

import {it} from '@jest/globals';

import {render, fireEvent, screen} from '@testing-library/react-native';
import App from '../App';
import {add} from '../stringCalculator';

describe('App Component', () => {
  // Test if the component renders properly
  it('should update the text input', () => {
    render(<App />);
    
    // Get the text input element
    const inputField = screen.getByTestId('textbox');
    
    fireEvent.changeText(inputField, '1,2,3');
    
    // Check if the text input value is updated
    expect(inputField.props.value).toBe('1,2,3');
  });

  // Test the Calculate button functionality
  it('should calculate and display the result', () => {
    render(<App />);
    // Get the input field and enter a value
    const inputField = screen.getByTestId('textbox');
    fireEvent.changeText(inputField, '1,2,3');

    const calculateButton = screen.getByText('Calculate');
    fireEvent.press(calculateButton);
    
    // Check if the result displayed matches the result
    expect(screen.getByText('Result : 6')).toBeTruthy();
  });

  it('should calculate and display the result for string with delimiter', () => {
    render(<App />);
    // Get the input field and enter a value
    const inputField = screen.getByTestId('textbox');
    fireEvent.changeText(inputField, '//;\n1;2');

    const calculateButton = screen.getByText('Calculate');
    fireEvent.press(calculateButton);
    
    // Check if the result displayed matches the result
    expect(screen.getByText('Result : 3')).toBeTruthy();
  });

  it('should calculate display 0 for empty string', () => {
    render(<App />);
    // Get the input field and enter a value
    const inputField = screen.getByTestId('textbox');
    fireEvent.changeText(inputField, '');

    const calculateButton = screen.getByText('Calculate');
    fireEvent.press(calculateButton);
    
    // Check if the result displayed matches the result
    expect(screen.getByText('Result : 0')).toBeTruthy();
  });

  // Test the Clear button functionality
  it('should clear the text input and result', () => {
    render(<App />);
    
    const inputField = screen.getByTestId('textbox');
    fireEvent.changeText(inputField, '2,3');
    
    const calculateButton = screen.getByText('Calculate');
    fireEvent.press(calculateButton);
    
    // Check if the result is displayed
    expect(screen.getByText('Result : 5')).toBeTruthy();
    
    const clearButton = screen.getByTestId('clear');
    fireEvent.press(clearButton);
    
    // Check if the input field and result are cleared
    expect(inputField.props.value).toBe('');
    expect(screen.getByText('Result :')).toBeTruthy();
  });

  // Test negative numbers
  it('should handle invalid input', () => {
    render(<App />);
        
    // Get the input field and enter an negative values
    const inputField = screen.getByTestId('textbox');
    fireEvent.changeText(inputField, '-2,-1');
    
    const calculateButton = screen.getByText('Calculate');
    fireEvent.press(calculateButton);
    
    // Check if the result displays the error message
    expect(screen.getByText('Result : Negative numbers not allowed -2, -1')).toBeTruthy();
  });
});
