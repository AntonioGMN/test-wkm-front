import { VacationDate } from "@/Interfaces/vacationDate";
import { ChangeEvent, Dispatch, SetStateAction } from "react";
import countVacationDay from "./countVacationDays";

const handlerVacationDate =
	(
		index: number,
		vacationDate: VacationDate[],
		setVacationDate: Dispatch<SetStateAction<any>>,
		setCountVacationDays: Dispatch<SetStateAction<any>>
	) =>
	(e: ChangeEvent<HTMLInputElement>) => {
		if (e.target.name == "startDate")
			vacationDate[index].startDate = e.target.value;
		else vacationDate[index].endDate = e.target.value;

		console.log("vacationDate ", vacationDate);

		setVacationDate([...vacationDate]);
		countVacationDay([...vacationDate], setCountVacationDays);
	};

export default handlerVacationDate;
