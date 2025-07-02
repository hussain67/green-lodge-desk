import styled from "styled-components";
import { useUser } from "../features/authentications/useUser";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const FullPage = styled.div`
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
`;
function ProtectedRoute({ children }) {
	const navigate = useNavigate();

	// 1. Load the authenticated user
	const { isLoading, isAuthenticate } = useUser();
	// 2. Show spinner while loading

	useEffect(() => {
		if (!isAuthenticate && !isLoading) navigate("./login");
	}, [isAuthenticate, isLoading, navigate]);
	if (isLoading)
		return (
			<FullPage>
				{" "}
				<Spinner />{" "}
			</FullPage>
		);
	// 3. If no authenticated user redirect to login
	// 4. If the is a user, render the application
	if (isAuthenticate) return children;
}

export default ProtectedRoute;
