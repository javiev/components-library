import type { Meta, StoryObj } from '@storybook/react';

import { ModalComponent } from './index';

const meta = {
	title: 'Design System/Atoms/Modal',
	component: ModalComponent,
	tags: ['autodocs'],
} satisfies Meta<typeof ModalComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Modal: Story = {
	args: {
		isOpen: true,
		title: 'header',
		body: 'body',
		footer: 'footer',
	},
};
