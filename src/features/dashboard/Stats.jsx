import { HiOutlineBriefcase } from "react-icons/hi";
import Stat from "./Stat";
import { HiOutlineBanknotes, HiOutlineCalendarDays } from "react-icons/hi2";
import { formatCurrency } from "../../utils/helpers";

function Stats({ bookings = [], confirmedStays, numDays, cabinCount }) {
	//1 Number of bookings
	const numBookings = bookings?.length;

	//2  number of sales

	const sales = bookings?.reduce((acc, cur) => acc + cur.totalPrice, 0);

	//3 Checked In

	const checkedIn = confirmedStays?.length;

	// 4 Occupation

	const occupation = confirmedStays?.reduce((acc, cur) => acc + cur.numNights, 0) / (numDays * cabinCount);

	return (
		<>
			<Stat
				title="Bookings"
				color="blue"
				icon={<HiOutlineBriefcase />}
				value={numBookings}
			/>
			<Stat
				title="Sales"
				color="green"
				icon={<HiOutlineBanknotes />}
				value={formatCurrency(sales)}
			/>
			<Stat
				title="Checked ins"
				color="indigo"
				icon={<HiOutlineCalendarDays />}
				value={checkedIn}
			/>
			<Stat
				title="Occupancy Rate"
				color="yellow"
				icon={<HiOutlineBriefcase />}
				value={Math.round(occupation * 100) + "%"}
			/>
		</>
	);
}

export default Stats;
