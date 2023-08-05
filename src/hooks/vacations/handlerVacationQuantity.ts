import { VacationDate } from "@/Interfaces/vacationDate";
import { ChangeEvent, Dispatch, SetStateAction } from "react";

const handlerVacationPeriodsQuantity =
	(
		vacationDate: VacationDate[],
		setVacationDate: Dispatch<SetStateAction<any>>
	) =>
	(e: ChangeEvent<HTMLInputElement>) => {
		const currentVacationPeriodsQuantity = vacationDate.length;
		const newVacationPeriodsQuantity = parseInt(e.target.value);

		if (newVacationPeriodsQuantity > currentVacationPeriodsQuantity) {
			const addVacationDate = { startDate: "", endDate: "" };
			setVacationDate([...vacationDate, addVacationDate]);
		}

		if (
			newVacationPeriodsQuantity < currentVacationPeriodsQuantity &&
			currentVacationPeriodsQuantity !== 1
		) {
			const copi = [...vacationDate];
			copi.pop();
			setVacationDate(copi);
		}
	};

export default handlerVacationPeriodsQuantity;
