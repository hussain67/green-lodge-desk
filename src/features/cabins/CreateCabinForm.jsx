// import styled from "styled-components";
import Form from "../../ui/Form";
import TextArea from "../../ui/TextArea";
import FileInput from "../../ui/FileInput";
import Button from "../../ui/Button";
import { useForm } from "react-hook-form";
import FormRow from "../../ui/FormRow";
import { useCreateCabin } from "./useCreateCabin";
import { useEditCabin } from "./useEditCabin";

function CreateCabinForm({ cabinToEdit = {}, onClose }) {
	// using rest operator values saved in editValues variable
	// It is used as defaultValues
	const { id: editId, ...editValues } = cabinToEdit;
	const isEditSession = Boolean(editId);
	const { register, handleSubmit, reset, getValues, formState } = useForm({
		defaultValues: isEditSession ? editValues : {}
	});
	const { isCreating, createCabin } = useCreateCabin();
	const { isEditing, editCabin } = useEditCabin();
	const { errors } = formState;

	//On Submit function
	function onSubmit(data) {
		// console.log(data);
		const image = typeof data.image === "string" ? data.image : data.image[0];
		console.log(image);
		if (isEditSession)
			editCabin(
				{ newCabinData: { ...data, image }, id: editId },
				{
					onSuccess: () => reset()
				}
			);
		else {
			createCabin(
				{ ...data, image: image },
				{
					onSuccess: () => reset()
				}
			);
		}
	}

	// onError Function
	function onError(errors) {
		console.log(errors);
	}

	const isWorking = isCreating || isEditing;

	if (isWorking) return <h1>Loading...</h1>;

	return (
		<Form onSubmit={handleSubmit(onSubmit, onError)}>
			<FormRow
				label="Cabin name"
				error={errors?.name?.message}
			>
				<input
					type="text"
					id="name"
					{...register("name", {
						required: "This field is required"
					})}
				/>
			</FormRow>
			<FormRow
				label="Maximum capacity"
				error={errors?.maxCapacity?.message}
			>
				<input
					type="number"
					id="maxCapacity"
					{...register("maxCapacity", {
						required: "This field is required",
						min: {
							value: 1,
							message: "Capacity should be atleast one"
						}
					})}
				/>
			</FormRow>
			<FormRow
				label="Regular price"
				error={errors?.regularPrice?.message}
			>
				<input
					type="number"
					id="regularPrice"
					{...register("regularPrice", {
						required: "This field is required",
						min: {
							value: 1,
							message: "Capacity should be atleast one"
						}
					})}
				/>
			</FormRow>
			<FormRow
				label="Discount"
				error={errors?.discount?.message}
			>
				<input
					type="number"
					id="discount"
					defaultValue={0}
					{...register("discount", {
						required: "This field is required",
						validate: value => value <= getValues().regularPrice || "Discount Should be less than regular price"
					})}
				/>
			</FormRow>
			<FormRow
				label="Description of website"
				error={errors?.description?.message}
			>
				<TextArea
					type="text"
					id="description"
					defaultValue={""}
					{...register("description", {
						required: "This field is required"
					})}
				/>
			</FormRow>
			<FormRow
				label="Cabin photo"
				error={errors?.image?.message}
			>
				<FileInput
					id="image"
					accept="image/*"
					{...register("image", {
						required: isEditSession ? false : "This field is required"
					})}
				/>
			</FormRow>
			<FormRow>
				<Button
					variation="primary"
					size="medium"
					type="reset"
					onClick={onClose}
				>
					Cancel
				</Button>
				<Button
					variation="secondary"
					size="small"
				>
					{isEditSession ? "Edit cabin" : "Create new cabin"}
				</Button>
			</FormRow>
		</Form>
	);
}

export default CreateCabinForm;
