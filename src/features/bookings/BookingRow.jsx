import styled from "styled-components";
import Tag from "../../ui/Tag";
import { format, isToday } from "date-fns";
import { formatCurrency, formatDistanceFromNow } from "../../utils/helpers";

const StyledBookingRow = styled.div`
	display: grid;
	grid-template-columns: 0.6fr 2fr 2.4fr 1.4fr 1fr 3.2rem;
	column-gap: 2.4rem;
	align-items: center;
	background-color: var (--color-grey-0);

	padding: 1.2rem 2rem;
	&:not(:last-child) {
		border-bottom: 1.4px solid var(--color-grey-100);
	}
`;
const Stacked = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.2rem;
	& span:first-child {
		font-weight: 500;
	}
	& span:last-child {
		font-size: 1.2rem;
	}
`;
function BookingRow({
	booking: {
		// id,
		// created_at,
		startDate,
		endDate,
		numNights,
		// numGuests,
		status,
		totalPrice,
		guests: { fullName: guestName, email },
		cabins: { name: cabinName }
	}
}) {
	const statusToTagName = {
		unconfirmed: "blue",
		"checked-in": "green",
		"checked-out": "silver"
	};

	return (
		<StyledBookingRow>
			<div>{cabinName}</div>
			<Stacked>
				<span>{guestName}</span>
				<span>{email}</span>
			</Stacked>
			<Stacked>
				<span>
					{" "}
					{isToday(new Date(startDate)) ? "Today" : formatDistanceFromNow(endDate)} &rarr; {numNights} night stay
				</span>
				<span>
					{format(new Date(startDate), "MMM dd yyyy")} &mdash;{format(new Date(endDate), "MMM dd yyyy")}
				</span>
			</Stacked>
			<Tag type={statusToTagName[status]}>{status}</Tag>
			<div>{formatCurrency(totalPrice)}</div>
			<div></div>
		</StyledBookingRow>
	);
}

export default BookingRow;
