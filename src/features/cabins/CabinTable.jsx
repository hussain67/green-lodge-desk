import Spinner from "../../ui/Spinner";
import { styled } from "styled-components";
import CabinRow from "./CabinRow";
import { useCabins } from "./useCabins";
import { useSearchParams } from "react-router-dom";

// const Table = styled.div`
// 	border: 1px solid var(--color-grey-200);
// 	font-size: 1.4rem;
// 	background-color: var(--color-grey-0);
// 	border-radius: 7px;
// 	overflow: hidden;
// `;
const Table = styled.div`
	border: 1px solid var(--color-grey-200);
`;

const TableHeader = styled.div`
	display: grid;
	grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
	column-gap: 2.4rem;
	align-items: center;
	background-color: var(--color-grey-50);
	border-bottom: 1px solid var(--color-grey-100);
	text-transform: uppercase;
	letter-spacing: normal.4px;
	font-weight: 600;
	color: var(--color-grey-600);
	padding: 1.6rem 2.4rem;
`;

function CabinTable() {
	const [searchParams] = useSearchParams();
	const { isLoading, error, cabins } = useCabins();

	// Show spinner
	if (isLoading) return <Spinner />;
	if (error) console.log(error);

	//****/ 1. Filter by discount ****/

	const filterValue = searchParams.get("discount") || "all";
	// Select cabins
	let filteredCabins;
	if (filterValue === "all") filteredCabins = cabins;

	//No discount
	if (filterValue === "no-discount") {
		filteredCabins = cabins.filter(cabin => cabin.discount === 0);
	}
	//With discount
	if (filterValue === "with-discount") {
		filteredCabins = cabins.filter(cabin => cabin.discount > 0);
	}
	// console.log(cabins);

	//** SORT  */

	const sortBy = searchParams.get("sortBy") || "startDate-asc";
	console.log(sortBy);

	const [field, direction] = sortBy.split("-");
	const modifier = direction === "asc" ? 1 : -1;
	const sortedCabins = filteredCabins.sort((a, b) => (a[field] - b[field]) * modifier);

	return (
		<Table>
			<TableHeader>
				<div></div>
				<div>Cabin</div>
				<div>Capacity</div>
				<div>Price</div>
				<div>Discount</div>
				<div></div>
			</TableHeader>
			{sortedCabins.map(cabin => {
				// console.log(cabin);
				return (
					<CabinRow
						key={cabin.id}
						cabin={cabin}
					/>
				);
			})}
		</Table>
	);
}

export default CabinTable;
