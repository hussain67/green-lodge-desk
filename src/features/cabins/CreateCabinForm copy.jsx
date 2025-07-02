// import styled from "styled-components";
import Form from "../../ui/Form";
import TextArea from "../../ui/TextArea";
import FileInput from "../../ui/FileInput";
import Button from "../../ui/Button";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCabin, editCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";
import FormRow from "../../ui/FormRow";

function CreateCabinForm() {
	const queryClient = useQueryClient();
	const { register, handleSubmit, reset, getValues, formState } = useForm();

	const { errors } = formState;

	//On Submit function
	function onSubmit(data) {
		// console.log(data);
		mutate({ ...data, image: data.image[0] });
	}

	// onError Function
	function onError(errors) {
		console.log(errors);
	}

	// Create
	const { mutate, isLoading: isCreating } = useMutation({
		mutationFn: createCabin,
		onSuccess: () => {
			toast.success("New cabin successfully created");
			queryClient.invalidateQueries({
				queryKey: ["cabins"]
			});
			reset();
		},
		onError: err => {
			toast.error(err.message);
		}
	});

	// EDIT
	const { mutate: editCabinData, isLoading: isEditing } = useMutation({
		mutationFn: ({ newCabinData, id }) => editCabin(newCabinData, id),
		onSuccess: () => {
			toast.success("New cabin successfully created");
			queryClient.invalidateQueries({
				queryKey: ["cabins"]
			});
			reset();
		},
		onError: err => {
			toast.error(err.message);
		}
	});
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
						validate: value => value <= getValues().regularPrice || "Discount Should be less than regular price",
						min: {
							value: 1,
							message: "Capacity should be atleast one"
						}
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
						required: "This field is required"
					})}
				/>
			</FormRow>
			<FormRow>
				<Button
					variation="primary"
					size="medium"
					type="reset"
				>
					Cancel
				</Button>
				<Button
					variation="secondary"
					size="small"
				>
					Create Cabin
				</Button>
			</FormRow>
		</Form>
	);
}

export default CreateCabinForm;
