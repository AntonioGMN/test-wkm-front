import { VacationDate } from "@/components/interfaces/vacationDate";
import dayjs from "dayjs";
import { ChangeEvent, Dispatch, SetStateAction } from "react";
import countVacationDay from "./countVacationDays";

const handlerVacationDate =
	(
		index: number,
		vacationDate: VacationDate[],
		setVacationDate: Dispatch<SetStateAction<any>>,
		availableStartDates: string[],
		setAvailableStartDates: Dispatch<SetStateAction<any>>,
		setCountVacationDays: Dispatch<SetStateAction<any>>
	) =>
	(e: ChangeEvent<HTMLInputElement>) => {
		if (e.target.name == "start") vacationDate[index].start = e.target.value;
		else {
			const finishDate = e.target.value;
			vacationDate[index].end = finishDate;
			console.log("index ", index, " ", availableStartDates[index]);
			if (availableStartDates[index + 1] !== undefined) {
				availableStartDates[index + 1] = finishDate;
				setAvailableStartDates(availableStartDates);
			} else {
				setAvailableStartDates([...availableStartDates, e.target.value]);
			}
		}
		setVacationDate([...vacationDate]);

		countVacationDay(vacationDate, setCountVacationDays);
	};

export default handlerVacationDate;
