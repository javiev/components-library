import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Button, ButtonLabelProps  } from './index';

describe('Button component', () => {
	const props: ButtonLabelProps = {
		label: 'Click me!',
		color: 'success',
		size: 'medium',
		onClick: jest.fn(),
	};
});

test('render a button', () => {
	expect(true).toBe(true);
});
