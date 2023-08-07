"use client";

import { PropsWithChildren, createContext, useContext } from "react";
import { useToast } from "@chakra-ui/react";

interface AlertContextReturn {
	showAlert: (
		message: string,
		receverType: "success" | "error" | "warning"
	) => void;
}

const AlertContext = createContext({} as AlertContextReturn);

export default function AlertContextProvider({ children }: PropsWithChildren) {
	const toast = useToast();

	const showAlert = (
		message: string,
		receverType: "success" | "error" | "warning"
	) => {
		toast({
			title: message,
			status: receverType,
			duration: 3000,
			isClosable: true,
			position: "bottom-left",
		});
	};

	return (
		<AlertContext.Provider value={{ showAlert }}>
			{children}
		</AlertContext.Provider>
	);
}

export const useAlert = () => useContext(AlertContext);
