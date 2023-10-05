import StyledButton from './index.style';
import { ButtonProps } from './index.types';

/**
 * Extended props for the Button component with label and optional click handler.
 */
export interface ButtonLabelProps extends ButtonProps {
	/**
	 * The text displayed inside the button.
	 */
	label: string;
	/**
	 * Optional click event handler for the button.
	 */
	onClick?: () => void;
}

/**
 * Button Component.
 *
 * This component renders a button based on the provided size and color.
 *
 * @function
 * @param {object} props - The properties for the Button component.
 * @param {'small' | 'medium' | 'large'} props.size - Defines the size of the button.
 * @param {'success' | 'info' | 'error'} props.color - Defines the color theme of the button.
 * @param {string} [props.label="button"] - The text that will be displayed inside the button.
 * @param {function} [props.onClick] - Optional click event handler for the button.
 * @returns {JSX.Element} The Button component.
 *
 * @example
 * <Button
 *   size="medium"
 *   color="success"
 *   label="Click Me!"
 *   onClick={() => {
 *     console.log('Button clicked');
 *   }}
 * />
 */
export function Button({ color, size, label, onClick }: ButtonLabelProps) {
	return (
		<StyledButton size={size} color={color} onClick={onClick}>
			{label}
		</StyledButton>
	);
}
