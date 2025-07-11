import styled from "styled-components";
import DarkModeToggle from "./DarkModeToggle";

const StyledHeaderMenu = styled.ul`
	display: flex;
	gap: 0.4rem;
`;
function HeaderMenu() {
	return (
		<StyledHeaderMenu>
			<DarkModeToggle />
		</StyledHeaderMenu>
	);
}

export default HeaderMenu;
