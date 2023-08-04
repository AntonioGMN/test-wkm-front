import { VacationDate } from "@/components/interfaces/vacationDate";
import { ChangeEvent, Dispatch, SetStateAction } from "react";

const handlerVacationQuantity =
	(
		vacationQuantity: number,
		setVacationQuantity: Dispatch<SetStateAction<any>>,
		vacationDate: VacationDate[],
		setVacationDate: Dispatch<SetStateAction<any>>
	) =>
	(e: ChangeEvent<HTMLInputElement>) => {
		const newVacationQuantity = parseInt(e.target.value);
		if (newVacationQuantity > vacationQuantity) {
			const addVacationDate = { start: "", end: "" };
			setVacationDate([...vacationDate, addVacationDate]);
		}

		if (newVacationQuantity < vacationQuantity) {
			vacationDate.pop();
			setVacationDate(vacationDate);
		}

		setVacationQuantity(newVacationQuantity);
	};

export default handlerVacationQuantity;
