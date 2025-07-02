import { useSearchParams } from "react-router-dom";
import styled, { css } from "styled-components";

const StyledFilter = styled.div`
	display: flex;
	gap: 0.4rem;
	padding: 4rem;
`;

const FilterButton = styled.button`
	background-color: var(--color-grey-0);
	border: none;
	border-radius: var(--border-radious-sm);
	font-weight: 500;
	font-size: 1.4rem;
	padding: 0.4rem 0.8rem;
	${props =>
		props.active &&
		css`
			background-color: var(--color-brand-600);
			color: var(--color-brand-50);
		`}
	&:hover {
		background-color: var(--color-brand-600);
		color: var(--color-brand-50);
	}
`;
function Filter({ filterField, options }) {
	const [searchParams, setSearchParams] = useSearchParams();
	const currentFilter = searchParams.get(filterField) || options.at(0).value;
	// Function handleClick
	function handleClick(value) {
		searchParams.set(filterField, value);
		setSearchParams(searchParams);

		// console.log(searchParams);
	}

	return (
		<StyledFilter>
			{options?.map(option => {
				return (
					<FilterButton
						key={option.value}
						onClick={() => handleClick(option.value)}
						active={option.value === currentFilter}
						disabled={option.value === currentFilter}
					>
						{option.label}
					</FilterButton>
				);
			})}
		</StyledFilter>
	);
}
// function Filter() {
// 	const [searchParams, setSearchParams] = useSearchParams();
// 	function handleClick(value) {
// 		searchParams.set("discount", value);
// 		setSearchParams(searchParams);
// 		console.log(searchParams);
// 	}

// 	return (
// 		<StyledFilter>
// 			<FilterButton onClick={() => handleClick("all")}>All </FilterButton>
// 			<FilterButton onClick={() => handleClick("no-discount")}>No Discount</FilterButton>
// 			<FilterButton onClick={() => handleClick("with-discount")}>With discount</FilterButton>
// 		</StyledFilter>
// 	);
// }

export default Filter;
