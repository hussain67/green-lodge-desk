import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { styled } from "styled-components";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import GlobalStyle from "./styles/GlobalStyles";
import Dashboard from "./pages/Dashboard";
import Account from "./pages/Account";
import Bookings from "./pages/Bookings";
import Login from "./pages/Login";
import Users from "./pages/Users";
import Settings from "./pages/Settings";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./ui/AppLayout";
import { Toaster } from "react-hot-toast";
import Cabins from "./pages/Cabins";
import { DarkModeProvider } from "./context/DarkModeContext";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			// staleTime: 0
			staleTime: 60 * 1000
		}
	}
});
function App() {
	return (
		<DarkModeProvider>
			<QueryClientProvider client={queryClient}>
				<ReactQueryDevtools initialIsOpen={false} />
				<GlobalStyle />
				<BrowserRouter>
					<Routes>
						<Route element={<AppLayout />}>
							<Route
								index
								element={
									<Navigate
										// replace
										to="dashboard"
									/>
								}
							/>
							<Route
								path="dashboard"
								element={<Dashboard />}
							/>
							<Route
								path="account"
								element={<Account />}
							/>
							<Route
								path="bookings"
								element={<Bookings />}
							/>
							<Route
								path="cabins"
								element={<Cabins />}
							/>
							<Route
								path="users"
								element={<Users />}
							/>
							<Route
								path="settings"
								element={<Settings />}
							/>
						</Route>
						<Route
							path="login"
							element={<Login />}
						/>

						<Route
							path="*"
							element={<PageNotFound />}
						/>
					</Routes>
				</BrowserRouter>
				<Toaster position="top-center" />
			</QueryClientProvider>
		</DarkModeProvider>
	);
}

export default App;
