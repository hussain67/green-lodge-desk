import styled, { css } from "styled-components";

// export const Row = styled.div`
// 	display: flex;
// 	flex-direction: column;
// `;
// export const RowHorizontal = styled.div`
// 	display: flex;
// 	justify-content: space-between;
// 	align-items: center;
// `;

// export const RowVertical = styled.div`
// 	display: flex;
// 	flex-direction: column;
// 	gap: 1.6rem;
// `;

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
