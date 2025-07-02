import SignupForm from "../features/authentications/SignupForm";
import Heading from "../ui/Heading";

function NewUsers() {
	return (
		<>
			<Heading as="h1"> Create new user</Heading>
			<SignupForm />
		</>
	);
}

export default NewUsers;
