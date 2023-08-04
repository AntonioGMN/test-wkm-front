import { VacationDate } from "@/components/interfaces/vacationDate";
import { ChangeEvent, Dispatch, SetStateAction } from "react";

const handlerVacationPeriodsQuantity =
	(
		vacationQuantity: number,
		setVacationQuantity: Dispatch<SetStateAction<any>>,
		vacationDate: VacationDate[],
		setVacationDate: Dispatch<SetStateAction<any>>
		// availableVacationStartDates: string[],
		// setAvailableVacationStartDates: Dispatch<SetStateAction<any>>
	) =>
	(e: ChangeEvent<HTMLInputElement>) => {
		const newVacationQuantity = parseInt(e.target.value);
		if (newVacationQuantity > vacationQuantity) {
			const addVacationDate = { start: "", end: "" };
			setVacationDate([...vacationDate, addVacationDate]);
		}

		if (newVacationQuantity < vacationQuantity && vacationDate.length !== 1) {
			console.log("netour");
			vacationDate.pop();
			setVacationDate(vacationDate);
		}

		setVacationQuantity(newVacationQuantity);
	};

export default handlerVacationPeriodsQuantity;
