import GlobalStyle from "../styles/GlobalStyles";
import Button from "./Button";
import styled from "styled-components";
const Container = styled.div`
	margin: 0 auto;
	display: grid;
	place-content: center;
	height: 100dvh;
	width: 100dvh;
	row-gap: 24px;
`;
function ErrorFallback({ resetErrorBoundary }) {
	return (
		<>
			<GlobalStyle />
			<Container>
				<h1>Something went wrong</h1>
				<Button
					size={"large"}
					variation={"primary"}
					onClick={resetErrorBoundary}
				>
					Try again
				</Button>
			</Container>
		</>
	);
}

export default ErrorFallback;
