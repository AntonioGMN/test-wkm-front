"use client";

import {
	createContext,
	PropsWithChildren,
	useState,
	useContext,
	Dispatch,
	SetStateAction,
} from "react";
import { VacationDate } from "../Interfaces/vacationDate";

interface VacationContextProps {
	vacationDate: VacationDate[];
	setVacationDate: Dispatch<SetStateAction<any>>;
}

const VacationContext = createContext({} as VacationContextProps);

export default function VacationProvider({ children }: PropsWithChildren) {
	const [vacationDate, setVacationDate] = useState<VacationDate[]>([
		{
			startDate: "",
			endDate: "",
		},
	]);

	return (
		<VacationContext.Provider value={{ vacationDate, setVacationDate }}>
			{children}
		</VacationContext.Provider>
	);
}

export const useVacation = () => useContext(VacationContext);
