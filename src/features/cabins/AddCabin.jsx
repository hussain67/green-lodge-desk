import { useState } from "react";
import { Row } from "../../ui/Row";
import Modal from "../../ui/Modal";
import CreateCabinForm from "./CreateCabinForm";
import Button from "../../ui/Button";

function AddCabin() {
	const [showModal, setShowModal] = useState(false);
	return (
		<Row type="vertical">
			<Button
				size="small"
				variation="primary"
				onClick={() => setShowModal(!showModal)}
			>
				{" "}
				Add new Cabin
			</Button>
			{showModal && <Modal onClose={() => setShowModal(false)}>{<CreateCabinForm onClose={() => setShowModal(false)} />}</Modal>}
		</Row>
	);
}

export default AddCabin;
