import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Button, ButtonLabelProps } from '.';

describe('Button component', () => {
	const props: ButtonLabelProps = {
		label: 'Click me!',
		color: 'success',
		size: 'medium',
		onClick: jest.fn(),
	};

	test('Renders the button with the correct label', () => {
		const { getByText } = render(<Button {...props} />);
		const button = getByText('Click me!');
		expect(button).toBeInTheDocument();
	});

	test('Calls the onClick function when the button is clicked', () => {
		const onClickMock = jest.fn();
		const { getByText } = render(<Button {...props} onClick={onClickMock} />);
		const button = getByText('Click me!');
		fireEvent.click(button);
		expect(onClickMock).toHaveBeenCalled();
	});
});
