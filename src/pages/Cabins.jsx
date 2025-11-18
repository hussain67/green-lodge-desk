// import { getCabins } from "../../services/apiCabins";

import CabinTable from "../features/cabins/CabinTable";
import { Row } from "../ui/Row";
import AddCabin from "../features/cabins/AddCabin";
import Heading from "../ui/Heading";
import CabinTableOperations from "../features/cabins/CabinTableOperations";

function Cabins() {
	return (
		<>
			<Row type="horizontal">
				<Heading as="h1">Cabins</Heading>
				<CabinTableOperations />
			</Row>
			<Row type="vertical">
				<CabinTable />
				<AddCabin />
			</Row>
		</>
	);
}

export default Cabins;
