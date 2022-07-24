import styled from "styled-components";

export const Item = styled.li`
	display: flex;
	align-items: center;
	gap: ${p => p.theme.space[4]}px;
	margin-bottom: ${p => p.theme.space[3]}px;
	:last-of-type {
		margin-bottom: 0px;
	}
`;

export const Contact = styled.p`
	font-size: ${p => p.theme.fontSizes.m};
	font-family: "Walter Turncoat", cursive;
`;
export const Title = styled.h2`
	font-family: "Walter Turncoat", cursive;
	font-size: ${p => p.theme.fontSizes.l};
	margin-bottom: ${p => p.theme.space[4]}px;
`;

export const Button = styled.button`
	width: 115px;
	height: 35px;
	cursor: pointer;
	display: flex;
	align-items: center;
	position: relative;
	background: linear-gradient(to bottom, #d03c2d 5%, #ce0100 100%);
	background-color: #b53543;
	border-radius: 6px;
	border: ${p => p.theme.borders.none};
	color: #ffffff;
	font-family: "Open Sans", sans-serif;
	font-size: ${p => p.theme.fontSizes.m};
	text-decoration: none;
	span {
		transition: 200ms;
	}

	:hover .text {
		color: transparent;
	}
	:hover .icon {
		width: 100px;
		border-left: none;
		transform: translateX(0);
	}
	:hover {
		background: #dc4b48;
	}
	:focus {
		outline: none;
	}
`;

export const Text = styled.span`
	transform: translateX(10px);
	color: white;
	font-weight: bold;
`;
export const Icon = styled.span`
	position: absolute;
	border-left: 1px solid #92000a;
	transform: translateX(70px);
	height: 35px;
	width: 40px;
	display: flex;
	align-items: center;
	justify-content: center;
`;
