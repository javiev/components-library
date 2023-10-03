import ModalDefault, { ModalProps } from './default/index';

export function ModalComponent({ ...props }: ModalProps) {
	return <ModalDefault {...props} />;
}
