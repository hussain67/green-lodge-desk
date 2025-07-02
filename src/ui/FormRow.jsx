import styled from "styled-components";

// FormRow component
const StyledFormRow = styled.div`
	display: grid;
	grid-template-columns: 24rem 1fr 1.2fr;
	gap: 2.4rem;
	padding: 1.2rem 0;

	&:has(button) {
		display: flex;
		justify-content: flex-end;
		gap: 1.2rem;
	}
`;

// Label component
const Label = styled.label`
	font-weight: 500;
`;

// Error componenet
const Error = styled.span`
	color: red;
`;
function FormRow({ label, error, children }) {
	return (
		<StyledFormRow>
			{label && <Label htmlFor={children.id}>{label}</Label>}
			{children}
			{error && <Error>{error}</Error>}
		</StyledFormRow>
	);
}

export default FormRow;
