import { useVacationContext } from "@/contexts/vacationContext";
import { ChangeEvent } from "react";

type UseHandlerVacationsReturnType = {
	handlerVacationDate: (
		index: number
	) => (e: ChangeEvent<HTMLInputElement>) => void;
};

const UseHandlerVacations = (): UseHandlerVacationsReturnType => {
	const { vacations, setVacations } = useVacationContext();

	const handlerVacationDate =
		(index: number) => (e: ChangeEvent<HTMLInputElement>) => {
			const { name, value } = e.target;
			const updatedVacations = [...vacations];
			if (name.includes("startDate")) {
				updatedVacations[index].startDate = value;
			} else {
				updatedVacations[index].endDate = value;
			}

			setVacations(updatedVacations);
			//countVacationDay(updatedVacations, setCountVacationDays);
		};

	return { handlerVacationDate };
};

export default UseHandlerVacations;
