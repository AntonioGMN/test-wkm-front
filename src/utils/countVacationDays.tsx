import { VacationDate } from "@/components/interfaces/vacationDate";
import dayjs from "dayjs";
import { Dispatch, SetStateAction } from "react";

const countVacationDay = (
	vacationDate: VacationDate[],
	setCountVacationDays: Dispatch<SetStateAction<any>>
) => {
	const countedDays = vacationDate.map((v) => {
		if (v.start === undefined || v.end === undefined) return 0;

		const start = dayjs(v.start);
		const end = dayjs(v.end);

		const differenceInDays = end.diff(start, "day") + 1;
		return differenceInDays;
	});

	console.log(countedDays);

	setCountVacationDays(countedDays);
};

export default countVacationDay;
