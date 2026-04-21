import { createContext, useState, useContext } from "react";

export const UserContext = createContext();

function UserProvider({ children }) {
	const [username, setUsername] = useState("");

	return (
		<UserContext.Provider value={{ username, setUsername }}>
			{children}
		</UserContext.Provider>
	);
}

function useUser() {
	const context = useContext(UserContext);
	return context;
}

export { UserProvider, useUser };
