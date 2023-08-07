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
	vacations: VacationDate[];
	setVacations: Dispatch<SetStateAction<any>>;
	vacationPeriodsQuantity: number;
	setVacationPeriodsQuantity: Dispatch<SetStateAction<any>>;
}

const VacationContext = createContext({} as VacationContextProps);

export default function VacationProvider({ children }: PropsWithChildren) {
	const [vacationPeriodsQuantity, setVacationPeriodsQuantity] = useState(1);
	const [vacations, setVacations] = useState<VacationDate[]>([
		{
			startDate: "",
			endDate: "",
		},
	]);

	return (
		<VacationContext.Provider
			value={{
				vacations,
				setVacations,
				vacationPeriodsQuantity,
				setVacationPeriodsQuantity,
			}}
		>
			{children}
		</VacationContext.Provider>
	);
}

export const useVacationContext = () => useContext(VacationContext);
