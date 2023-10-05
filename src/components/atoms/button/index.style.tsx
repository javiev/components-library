import styled from 'styled-components';
import { Size, Color, ButtonProps } from './index.types';

const sizeMap: Record<Size, { fontSize: string; padding: string }> = {
	small: {
		fontSize: '12px',
		padding: '4px 8px',
	},
	medium: {
		fontSize: '16px',
		padding: '8px 16px',
	},
	large: {
		fontSize: '20px',
		padding: '12px 24px',
	},
};

const colorMap: Record<Color, { backgroundColor: string; textColor: string }> =
	{
		success: {
			backgroundColor: '#00C851',
			textColor: 'white',
		},
		info: {
			backgroundColor: '#33b5e5',
			textColor: 'white',
		},
		error: {
			backgroundColor: '#ff4444',
			textColor: 'white',
		},
	};

const StyledButton = styled.button<ButtonProps>`
	border: none;
	border-radius: 5px;
	cursor: pointer;
	font-weight: bold;
	font-size: ${(props) => sizeMap[props.size].fontSize};
	padding: ${(props) => sizeMap[props.size].padding};
	background-color: ${(props) => colorMap[props.color].backgroundColor};
	color: ${(props) => colorMap[props.color].textColor};

	&:hover {
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	}
`;

export default StyledButton;
