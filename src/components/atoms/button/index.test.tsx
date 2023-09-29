import { render, fireEvent } from '@testing-library/react';
import { Button, ButtonLabelProps } from '.';

describe('Button component', () => {
	const props: ButtonLabelProps = {
		label: 'Click me!',
		color: 'success',
		size: 'medium',
		onClick: jest.fn(),
	};

	test('renders with provided label', () => {
		const { getByText } = render(<Button {...props} />);
		expect(getByText('Click me!')).toBeInTheDocument();
	});

	test('triggers onClick handler when clicked', () => {
		const { getByText } = render(<Button {...props} />);
		fireEvent.click(getByText('Click me!'));
		expect(props.onClick).toHaveBeenCalledTimes(1);
	});
});
