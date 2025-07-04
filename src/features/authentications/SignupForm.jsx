import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { useSignup } from "./useSignup";
import SpinnerMini from "../../ui/SpinnerMini";

function SignupForm() {
	const { signup, isLoading } = useSignup();
	const { register, formState, getValues, handleSubmit, reset } = useForm();
	const { errors } = formState;

	function onFormSubmit({ fullName, email, password }) {
		signup(
			{ fullName, email, password },
			{
				onSettled: reset
			}
		);
	}
	return (
		<Form onSubmit={handleSubmit(onFormSubmit)}>
			<FormRow
				label="Full name"
				error={errors?.fullName?.message}
			>
				<Input
					type="text"
					id="FullName"
					{...register("fullName", { required: "This field is required" })}
					disabled={isLoading}
				></Input>
			</FormRow>
			<FormRow
				label="Email address"
				error={errors?.email?.message}
			>
				<Input
					type="email"
					id="email"
					{...register("email", { required: "This field is required", pattern: { value: /\S+@\S+\.\S+/, message: "Please provide a valid email address" } })}
				></Input>
			</FormRow>
			<FormRow
				label="Password (min 6 character)"
				error={errors?.password?.message}
			>
				<Input
					type="password"
					id="password"
					{...register("password", {
						required: "This field is required",
						minLength: {
							value: 6,
							message: "Password needs a minimum of 6 characters"
						}
					})}
				></Input>
			</FormRow>
			<FormRow
				label="Repeat password"
				error={errors?.passwordConfirm?.message}
			>
				<Input
					type="password"
					id="passwordConfirm"
					{...register("passwordConfirm", { required: "This field is required", validate: value => value === getValues().password || "Password need to match" })}
				></Input>
			</FormRow>
			<FormRow>
				<Button
					variation="secondary"
					type="reset"
				>
					Cancel
				</Button>
				<Button variation="primary"> {isLoading ? <SpinnerMini /> : "Create new user"}</Button>
			</FormRow>
		</Form>
	);
}

export default SignupForm;
