import styled, { css } from "styled-components";

export const Row = styled.div`
	display: flex;

	${props =>
		props.type === "horizontal" &&
		css`
			justify-content: space-around;
			align-items: center;
		`}
	${props =>
		props.type === "vertical" &&
		css`
			flex-direction: column;
			gap: 1.6rem;
		`}
`;
