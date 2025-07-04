import styled from "styled-components";
import { useBookings } from "./useBookings";
import Spinner from "../../ui/Spinner";
import BookingRow from "./BookingRow";
import Pagination from "../../ui/Pagination";

const Table = styled.div`
	border: 1px solid var(--color-grey-200);
	font-size: 1.4;
	background-color: var(--color-grey-0);
	border-radius: 7px;
	overflow: hidden;
`;

const TableHeader = styled.div`
	display: grid;
	grid-template-columns: 0.6fr 2fr 2.4fr 1.4fr 1fr 3.2rem;
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
const TableBody = styled.div`
	margin: 0.4rem 0;
`;

const TableFooter = styled.footer`
	background-color: var(--color-grey-50);
	display: flex;

	padding: 1.2rem;
`;
function BookingTable() {
	const { isLoading, error, bookings, count } = useBookings();

	console.log(isLoading, error);
	if (isLoading) return <Spinner />;
	return (
		<Table>
			<TableHeader>
				<div>Cabin</div>
				<div>Guest</div>
				<div>Dates</div>
				<div>Status</div>
				<div>Amount</div>
				<div></div>
			</TableHeader>
			<TableBody>
				{bookings.map(booking => {
					return (
						<BookingRow
							key={booking.id}
							booking={booking}
						/>
					);
				})}
			</TableBody>
			<TableFooter>
				<Pagination count={count} />
			</TableFooter>
		</Table>
	);
}

export default BookingTable;
