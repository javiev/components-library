import ModalDefault from './default/index';
import { ModalProps } from './default/index.types';

/**
 * ModalComponent is a wrapper around the ModalDefault component,
 * forwarding all received props to ModalDefault.
 *
 * @example
 * <ModalComponent
 *   title="Modal Title"
 *   body={<p>Modal Body Content</p>}
 *   footer={<p>Modal Footer Content</p>}
 *   isOpen={true}
 *   onClose={() => console.log('Modal Closed')}
 * />
 */
export function ModalComponent({ ...props }: ModalProps) {
	return <ModalDefault {...props} />;
}
