import { VacationDate } from "@/components/interfaces/vacationDate";
import { ChangeEvent, Dispatch, SetStateAction } from "react";

const handlerVacationDate =
	(
		index: number,
		vacationDate: VacationDate[],
		setVacationDate: Dispatch<SetStateAction<any>>
	) =>
	(e: ChangeEvent<HTMLInputElement>) => {
		if (e.target.name == "start") vacationDate[index].start = e.target.value;
		else vacationDate[index].end = e.target.value;
		setVacationDate([...vacationDate]);
	};

export default handlerVacationDate;
