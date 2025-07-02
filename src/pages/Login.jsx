import styled from "styled-components";
import LoginForm from "../features/authentications/LoginForm";
import Logo from "../ui/Logo";
import Heading from "../ui/Heading";

const LoginLayout = styled.div`
	display: grid;
	height: 100vh;
	grid-template-columns: 48rem;
	place-content: center;
	background-color: var(--color-grey-50);
	gap: 3.2rem;
`;
function Login() {
	return (
		<LoginLayout>
			<Logo />
			<Heading as="h4">Log in to your account</Heading>
			<LoginForm />
		</LoginLayout>
	);
}

export default Login;
