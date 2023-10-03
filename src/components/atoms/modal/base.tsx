import React, { PropsWithChildren } from 'react';

import {
	ModalBackdrop,
	ModalBody,
	ModalContent,
	ModalHeader,
	ModalWrapper,
} from './index.style';

export interface ModalComposition {
	Header?: React.FC<{ title: string }>;
	Body?: React.FC<PropsWithChildren<object>>;
	Footer?: React.FC<PropsWithChildren<object>>;
}

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	children: React.ReactNode;
}

function Modal({
	children,
	isOpen = false,
	onClose,
}: PropsWithChildren<ModalProps>) {
	return (
		<>
			{isOpen && (
				<ModalBackdrop data-testid="modal-backdrop" onClick={onClose}>
					<ModalWrapper>
						<ModalContent onClick={(e) => e.stopPropagation()}>
							{children}
						</ModalContent>
					</ModalWrapper>
				</ModalBackdrop>
			)}
		</>
	);
}

function Header({ title }: { title: string }) {
	return <ModalHeader>{title}</ModalHeader>;
}

function Body({ children }: PropsWithChildren<object>) {
	return <ModalBody>{children}</ModalBody>;
}

function Footer({ children }: PropsWithChildren<object>) {
	return <div>{children}</div>;
}

Modal.Header = Header;
Modal.Body = Body;
Modal.Footer = Footer;

export default Modal;
