import styled from "styled-components";

export const Text = styled.p`
	margin-bottom: ${p => p.theme.space[3]}px;
	font-size: 18px;
	font-family: "Walter Turncoat", cursive;
`;

export const SearchLabel = styled.label`
	position: relative;
`;

export const InputSearch = styled.input`
	background-color: transparent;
	border: 2px solid ${p => p.theme.colors.black};
	height: 30px;
	width: 30px;
	padding: 0 0px;
	font-size: 1.1em;
	font-weight: lighter;
	color: ${p => p.theme.colors.black};
	border-radius: 24px;
	transition: all 0.4s;
	transition-timing-function: ease-out;
	:focus {
		width: 200px;
		padding: 0 12px;
		outline: none;
	}
	+ .search:after {
		content: "";
		border-top: 3px solid ${p => p.theme.colors.black};
		width: 15px;
		display: block;
		position: absolute;
		right: -6px;
		bottom: -8px;
		transform: rotate(45deg);
		transition: all 0.2s;
		transition-timing-function: ease-out;
	}
	+ .search:before {
		content: "";
		border-top: 3px solid ${p => p.theme.colors.black};
		width: 0px;
		display: block;
		position: absolute;
		right: -2px;
		bottom: 19px;
		transform: rotate(-45deg);
		transition: all 0.2s;
		transition-timing-function: ease-out;
		transition-delay: 0s;
	}
	:focus + .search:after {
		content: "";
		border-top: 3px solid ${p => p.theme.colors.black};
		display: block;
		position: absolute;
		right: 10px;
		bottom: 9px;
		transform: rotate(45deg);
	}
	:focus + .search:before {
		right: 10px;
		bottom: 9px;
		width: 15px;
		transition: all 0.1s;
		transition-timing-function: ease-in;
		transition-delay: 0.2s;
	}
`;
