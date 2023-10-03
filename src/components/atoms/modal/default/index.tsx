import React from 'react';

import ModalBase, { ModalComposition } from '../base';

export interface ModalProps extends ModalComposition {
	title: string;
	body: React.ReactNode;
	footer: React.ReactNode;
	isOpen: boolean;
	onClose: () => void;
}

export default function Modal({
	title,
	body,
	footer,
	isOpen,
	onClose,
}: ModalProps) {
	return (
		<ModalBase isOpen={isOpen} onClose={onClose}>
			<ModalBase.Header title={title} />
			<ModalBase.Body>{body}</ModalBase.Body>
			<ModalBase.Footer>{footer}</ModalBase.Footer>
		</ModalBase>
	);
}
