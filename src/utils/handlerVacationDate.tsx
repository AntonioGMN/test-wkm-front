import { VacationDate } from "@/components/interfaces/vacationDate";
import { ChangeEvent, Dispatch, SetStateAction } from "react";

const handlerVacationDate =
	(
		index: number,
		vacationDate: VacationDate[],
		setVacationDate: Dispatch<SetStateAction<any>>,
		availableDates: string[],
		setAvailableDates: Dispatch<SetStateAction<any>>
	) =>
	(e: ChangeEvent<HTMLInputElement>) => {
		if (e.target.name == "start") vacationDate[index].start = e.target.value;
		else {
			const finishDate = e.target.value;
			vacationDate[index].end = finishDate;
			console.log("index ", index, " ", availableDates[index]);
			if (availableDates[index + 1] !== undefined) {
				availableDates[index + 1] = finishDate;
				setAvailableDates(availableDates);
			} else {
				setAvailableDates([...availableDates, e.target.value]);
			}
		}
		setVacationDate([...vacationDate]);
	};

export default handlerVacationDate;
