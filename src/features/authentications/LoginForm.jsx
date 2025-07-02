import { useState } from "react";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import { FormRowVertical } from "../../ui/FormRowVertical";

import useLogin from "./useLogin";
import SpinnerMini from "../../ui/SpinnerMini";

function LoginForm() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { login, isLoading } = useLogin();

	// Form submit function
	function handleSubmit(e) {
		e.preventDefault();
		if (!email || !password) return;

		login(
			{ email, password },
			{
				onSettled: () => {
					setEmail("hussain.msh67@yahoo.com");
					setPassword("248-lvi");
				}
			}
		);
	}
	return (
		<Form onSubmit={handleSubmit}>
			<FormRowVertical label="User Name">
				<input
					type="email"
					id="email"
					autoComplete="username"
					value={email}
					onChange={e => setEmail(e.target.value)}
					disabled={isLoading}
				/>
			</FormRowVertical>
			<FormRowVertical label="Password">
				<input
					type="password"
					id="password"
					autoComplete="current-password"
					value={password}
					onChange={e => setPassword(e.target.value)}
					disabled={isLoading}
				/>
			</FormRowVertical>
			<FormRowVertical>
				<Button variation="primary"> {isLoading ? <SpinnerMini /> : "Login"}</Button>
			</FormRowVertical>
		</Form>
	);
}

export default LoginForm;
