import { VacationDate } from "@/components/interfaces/vacationDate";
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
		if (e.target.name == "start") vacationDate[index].start = e.target.value;
		else vacationDate[index].end = e.target.value;
		setVacationDate([...vacationDate]);

		countVacationDay(vacationDate, setCountVacationDays);
	};

export default handlerVacationDate;
