import styled from "styled-components";

const StyledStat = styled.div`
	background-color: var(--color-grey-0);
	border: 1px solid var(--color-grey-100);
	border-radius: var(--border-radius-md);
	padding: 1.6rem;
	display: grid;
	grid-template-columns: 6.4rem 1fr;
	grid-template-rows: auto auto;
	column-gap: 1.6rem;
	row-gap: 0.4rem;
`;

const Icon = styled.div`
	grid-row: 1 / -1;

	border-radius: 50%;
	aspect-ratio: 1;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: var(--color-${props => props.color}-100);
`;
const Title = styled.h5`
	background-color: var() (--color-grey-500);
	text-transform: uppercase;
`;
const Value = styled.p`
	font-size: 2.4rem;
	font-weight: 500;
`;
function Stat({ icon, title, value, color }) {
	return (
		<StyledStat>
			<Icon color={color}>{icon}</Icon>
			<Title>{title}</Title>
			<Value>{value}</Value>
		</StyledStat>
	);
}
export default Stat;
