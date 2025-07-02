import styled, { css } from "styled-components";

export const Exp = styled.button`
	display: block;
	padding: 10px;
	/* background-color: red; */

	${props =>
		props.type === "red" &&
		css`
			background-color: red;
		`}
`;
