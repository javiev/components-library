/**
 * Size variations for the button.
 * @type {('small' | 'medium' | 'large')}
 */
export type Size = 'small' | 'medium' | 'large';

/**
 * Color themes for the button.
 * @type {('success' | 'info' | 'error')}
 */
export type Color = 'success' | 'info' | 'error';

/**
 * Props for the Button component.
 */
export interface ButtonProps {
	/**
	 * Defines the size of the button.
	 */
	size: Size;
	/**
	 * Defines the color theme of the button.
	 */
	color: Color;
}
