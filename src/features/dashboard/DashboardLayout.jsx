import styled from "styled-components";
import { useRecentBookings } from "../bookings/useRecentBookings";
import Spinner from "../../ui/Spinner";
import { useRecentStays } from "../bookings/useRecentStays";
import Stats from "./Stats";
import { useCabins } from "../cabins/useCabins";
import SalesChart from "./SalesChart";
const StyledDashboardLayout = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	grid-template-rows: auto 34rem auto;
`;

function DashboardLayout() {
	// BOOKINGS
	const { isLoading: isLoading1, bookings } = useRecentBookings();

	// STAYS

	const { isLoading: isLoading2, confirmedStays, numDays } = useRecentStays();
	// CABINS
	const { cabins, isLoading: isLoading3 } = useCabins();
	if (isLoading1 || isLoading2 || isLoading3) return <Spinner />;
	return (
		<StyledDashboardLayout>
			<Stats
				bookings={bookings}
				confirmedStays={confirmedStays}
				cabinCount={cabins.length}
				numDays={numDays}
			/>
			<SalesChart />
		</StyledDashboardLayout>
	);
}

export default DashboardLayout;
