import ModalBase from '../base';
import { ModalProps } from './index.types';

function Modal({ title, body, footer, isOpen, onClose }: ModalProps) {
	return (
		<ModalBase isOpen={isOpen} onClose={onClose}>
			<ModalBase.Header title={title} />
			<ModalBase.Body>{body}</ModalBase.Body>
			<ModalBase.Footer>{footer}</ModalBase.Footer>
		</ModalBase>
	);
}

export default Modal;
