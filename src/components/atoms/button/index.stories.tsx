import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './index';

const meta = {
	title: 'Design System/Atoms/Button',
	component: Button,
	argTypes: {
		color: {
			options: ['success', 'info', 'error'],
			control: { type: 'radio' },
		},
		size: {
			options: ['small', 'medium', 'large'],
			control: { type: 'radio' },
		},
		onClick: { action: 'clicked' },
	},
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		label: 'button',
		color: 'success',
		size: 'medium',
	},
};
