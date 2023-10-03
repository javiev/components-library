import { styled } from 'styled-components';

export const ModalBackdrop = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(169, 169, 169, 0.5);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 999;
`;

export const ModalWrapper = styled.div`
	position: relative;
	width: 50%;
`;

export const ModalContent = styled.div`
	background-color: white;
	border-radius: 5px;
	padding: 20px;
	box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

export const ModalHeader = styled.h2`
	color: black;
	font-size: 1.5rem;
	font-weight: 600;
	margin: 0 0 1rem;
`;

export const ModalBody = styled.div`
	font-size: 16px;
	margin-bottom: 16px;
`;
