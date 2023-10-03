import React, { PropsWithChildren } from 'react';

/**
 * ModalComposition is an interface that defines the structure of a modal component.
 */
export interface ModalComposition {
	/**
	 * Header is a component for displaying the title of the modal.
	 */
	Header: React.FC<{ title: string }>;

	/**
	 * Body is a component for displaying the main content of the modal.
	 */
	Body: React.FC<PropsWithChildren<object>>;

	/**
	 * Footer is a component for displaying optional footer content in the modal.
	 */
	Footer: React.FC<PropsWithChildren<object>>;
}

/**
 * ModalProps is an interface that defines the properties expected by a modal component.
 */
export interface ModalProps {
	/**
	 * isOpen indicates whether the modal is open or closed.
	 */
	isOpen: boolean;

	/**
	 * onClose is a callback function called when the modal is closed.
	 */
	onClose: () => void;

	/**
	 * children represents the content to be displayed within the modal.
	 */
	children: React.ReactNode;
}
