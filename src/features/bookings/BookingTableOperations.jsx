import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";
import { TableOperations } from "../../ui/TableOperations";

const filterOptions = [
	{ value: "all", label: "All" },
	{ value: "checked-in", label: "Checked in" },
	{ value: "checked-out", label: "Checked-out" },
	{ value: "unconfirmed", label: "Unconfirmed" }
];

const sortOptions = [
	{ value: "startDate-desc", label: "Sort by date (recent first)" },
	{ value: "startDate-asc", label: "Sort by date (earlier first)" },
	{
		value: "totalPrice-desc",
		label: "Sort by amount (high first)"
	},
	{ value: "totalPrice-asc", label: "Sort by amount (low first)" }
];
function BookingTableOperations() {
	return (
		<TableOperations>
			<Filter
				filterField="status"
				options={filterOptions}
			/>
			<SortBy options={sortOptions} />
		</TableOperations>
	);
}

export default BookingTableOperations;
