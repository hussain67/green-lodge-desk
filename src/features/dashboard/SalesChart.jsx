import styled from "styled-components";
import Heading from "../../ui/Heading";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { eachDayOfInterval, format, isSameDay, subDays } from "date-fns";
const StyledSalesChart = styled.div`
	grid-column: 1 / -1;
	background-color: #fff;
`;

function SalesChart({ bookings, numDays }) {
	const allDates = eachDayOfInterval({
		start: subDays(new Date(), numDays - 1),
		end: new Date()
	});

	console.log(allDates);
	const data = allDates.map(date => {
		return {
			label: format(date, "MMM dd"),
			totalSales: bookings.filter(booking => isSameDay(date, new Date(booking.created_at))).reduce((acc, curr) => acc + curr.totalPrice, 0),
			extraSales: bookings.filter(booking => isSameDay(date, new Date(booking.created_at))).reduce((acc, curr) => acc + curr.extrasPrice, 0)
		};
	});

	return (
		<StyledSalesChart>
			<Heading as="h1">Sales</Heading>
			<ResponsiveContainer>
				<AreaChart
					data={data}
					height={300}
					width={500}
				>
					<XAxis dataKey="label" />
					<YAxis unit="£" />
					<CartesianGrid />
					<Tooltip />
					<Area
						dataKey="totalSales"
						type="monotone"
						fill="orange"
						stroke="red"
					/>
				</AreaChart>
			</ResponsiveContainer>
		</StyledSalesChart>
	);
}

export default SalesChart;
