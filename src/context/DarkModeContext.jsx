import { createContext, useContext, useEffect, useState } from "react";

const DarkModeContext = createContext();

function DarkModeProvider({ children }) {
	const [isDarkMode, setIsDarkMode] = useState(false);

	function toggleDarkMode() {
		setIsDarkMode(isDarkMode => !isDarkMode);
	}
	useEffect(() => {
		//documentElement = root html
		if (isDarkMode) {
			document.documentElement.classList.add("dark-mode");
			document.documentElement.classList.remove("light-mode");
		}
		if (!isDarkMode) {
			document.documentElement.classList.add("light-mode");
			document.documentElement.classList.remove("dark-mode");
		}
	}, [isDarkMode]);

	const value = { isDarkMode, toggleDarkMode };
	return <DarkModeContext.Provider value={value}>{children}</DarkModeContext.Provider>;
}

function useDarkMode() {
	const context = useContext(DarkModeContext);
	if (context === undefined) {
		throw new Error("DarkModeContext was used outside DarkModeProvider");
	}
	return context;
}

export { DarkModeProvider, useDarkMode };
