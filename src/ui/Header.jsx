import { styled } from "styled-components";
import Logout from "../features/authentications/Logout";
import HeaderMenu from "./HeaderMenu";

const StyledHeader = styled.header`
	background-color: var(--color-grey-0);
	padding: 1.2rem 4.8rem;
	border-bottom: 1px solid var(--color-grey-100);
	display: flex;
	gap: 0.4rem;
`;

function Header() {
	return (
		<StyledHeader>
			<Logout />
			<HeaderMenu />
		</StyledHeader>
	);
}

export default Header;
