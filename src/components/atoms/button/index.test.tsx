import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Button } from './index';

describe('Button', () => {
	it('renders with the correct label', () => {
		const { getByText } = render(
			<Button label="Click Me!" color="success" size="large" />
		);
		expect(getByText('Click Me!')).toBeInTheDocument();
	});

	it('triggers the onClick handler when clicked', () => {
		const handleClick = jest.fn();
		const { getByText } = render(
			<Button
				label="Click Me!"
				color="success"
				size="large"
				onClick={handleClick}
			/>
		);
		fireEvent.click(getByText('Click Me!'));
		expect(handleClick).toHaveBeenCalledTimes(1);
	});

	it('renders with the correct color and size', () => {
		const { getByText } = render(
			<Button label="Click Me!" color="success" size="large" />
		);
		const button = getByText('Click Me!');
		// Aquí estás verificando las clases CSS aplicadas, ajusta según tu implementación
		expect(button).toHaveClass('color-success size-large');
	});
});
