import { Outlet } from "react-router-dom";
import Heading from "./Header";
import Sidebar from "./Sidebar";
import { styled } from "styled-components";

const Main = styled.div`
	background-color: var(--color-grey-50);
	padding: 4rem 4.8rem 6rem;
	overflow: scroll;
`;
const StyledAppLayout = styled.div`
	display: grid;
	grid-template-columns: 26rem 1fr;
	grid-template-rows: auto 1fr;
	height: 100vh;
`;

const Container = styled.div`
	max-width: 120rem;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	gap: 3.2rem;
`;
function AppLayout() {
	return (
		<StyledAppLayout>
			<Heading />
			<Sidebar />
			<Main>
				<Container>
					<Outlet />
				</Container>
			</Main>
		</StyledAppLayout>
	);
}

export default AppLayout;
