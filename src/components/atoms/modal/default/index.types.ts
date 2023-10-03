import React from 'react';
/**
 * ModalProps defines the shape of the props required by the Modal component.
 */
export interface ModalProps {
	/**
	 * The title to be displayed in the Modal header.
	 */
	title: string;

	/**
	 * The content to be displayed in the Modal body.
	 */
	body: React.ReactNode;

	/**
	 * The content to be displayed in the Modal footer.
	 */
	footer: React.ReactNode;

	/**
	 * Indicates whether the Modal is currently open.
	 */
	isOpen: boolean;

	/**
	 * A callback function to be invoked when the Modal is closed.
	 */
	onClose: () => void;
}
