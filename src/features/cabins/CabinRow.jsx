import { useState } from "react";
import { styled } from "styled-components";
import { formatCurrency } from "../../utils/helpers";
import CreateCabinForm from "./CreateCabinForm";
import { useDeleteCabin } from "./useDeleteCabin";
import { HiSquare2Stack, HiTrash } from "react-icons/hi2";
import { HiPencil } from "react-icons/hi";
import { useCreateCabin } from "./useCreateCabin";
const TableRow = styled.div`
	display: grid;
	grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;

	column-gap: 2.4rem;
	align-items: center;
	padding: 1.4rem 2.4rem;
	&:not(:last-child) {
		border-bottom: 1px solid var(--color-grey-100);
	}
`;
const Cabin = styled.div`
	font-size: 1.6rem;
	font-weight: 600;
	color: var(--color-grey-600);
	font-family: "Sono";
`;
const Price = styled.div`
	font-family: "Sono";
	font-weight: 600;
`;
const Discount = styled.div`
	font-family: "Sono";
	font-weight: 500;
	color: var(--color-green-700);
`;

function CabinRow({ cabin }) {
	const [showForm, setShowForm] = useState(false);
	const { image, id: cabinId, name, maxCapacity, regularPrice, discount, description } = cabin;
	const { isDeleting, deleteCabin } = useDeleteCabin();
	const { isCreating, createCabin } = useCreateCabin();

	// Function for creating duplicate cabin

	function duplicateCabin() {
		createCabin({
			name: `copy of ${name}`,
			maxCapacity,
			regularPrice,
			discount,
			image,
			description
		});
	}
	return (
		<>
			<TableRow>
				<div>
					<img
						src={image}
						alt={name}
					/>
				</div>
				<Cabin>{name}</Cabin>
				<div>Fits up to {maxCapacity} guests</div>
				<Price>{formatCurrency(regularPrice)}</Price>
				{discount ? <Discount>{formatCurrency(discount)}</Discount> : <span>&mdash;</span>}
				<div>
					<button
						disabled={isCreating}
						onClick={duplicateCabin}
					>
						<HiSquare2Stack />
					</button>
					<button onClick={() => setShowForm(!showForm)}>
						{" "}
						<HiPencil />
					</button>
					<button
						onClick={() => deleteCabin(cabinId)}
						disabled={isDeleting}
					>
						<HiTrash />
					</button>
				</div>
			</TableRow>
			{showForm && <CreateCabinForm cabinToEdit={cabin} />}
		</>
	);
}

export default CabinRow;
