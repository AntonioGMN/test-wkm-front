import { VacationDate } from "@/components/interfaces/vacationDate";
import dayjs from "dayjs";
import { Dispatch, SetStateAction } from "react";

const countVacationDay = (
	vacationDate: VacationDate[],
	setCountVacationDays: Dispatch<SetStateAction<any>>
) => {
	const countedDays = vacationDate.map(({ start, end }) => {
		if (start === "" || end === "") return 0;

		const differenceInDays = dayjs(end).diff(dayjs(start), "day") + 1;
		return differenceInDays;
	});

	console.log(countedDays);

	setCountVacationDays(countedDays);
};

export default countVacationDay;
