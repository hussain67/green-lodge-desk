import UpdateSettingForm from "../features/settings/updateSettingForm";
import Heading from "../ui/Heading";
import { Row } from "../ui/Row";

function Settings() {
	return (
		<Row>
			<Heading as="h1">Update Hotel settings</Heading>
			<UpdateSettingForm />
		</Row>
	);
}

export default Settings;
