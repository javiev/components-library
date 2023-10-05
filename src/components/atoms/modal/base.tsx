import { PropsWithChildren } from 'react';
import { ModalProps } from './base.types';

import {
	ModalBackdrop,
	ModalBody,
	ModalContent,
	ModalHeader,
	ModalWrapper,
} from './index.style';

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

/**
 * The Header sub-component of the Modal.
 */
function Header({ title }: { title: string }) {
	return <ModalHeader>{title}</ModalHeader>;
}

/**
 * The Body sub-component of the Modal.
 */
function Body({ children }: PropsWithChildren<object>) {
	return <ModalBody>{children}</ModalBody>;
}

/**
 * The Footer sub-component of the Modal.
 */
function Footer({ children }: PropsWithChildren<object>) {
	return <div>{children}</div>;
}

Modal.Header = Header;
Modal.Body = Body;
Modal.Footer = Footer;

export default Modal;
