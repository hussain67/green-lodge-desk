import { useQuery } from "@tanstack/react-query";
import { getBookingsAfterDate } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";
import { subDays } from "date-fns";

export function useRecentBookings() {
	const [searchParams] = useSearchParams();
	const numDays = !searchParams.get("last") ? 7 : searchParams.get("last");
	const queryDate = subDays(new Date(), numDays).toISOString();

	const { isLoading, data: bookings } = useQuery({
		queryKey: ["bookings", `last ${numDays}`],
		queryFn: () => getBookingsAfterDate(queryDate)
	});

	return { isLoading, bookings };
}
