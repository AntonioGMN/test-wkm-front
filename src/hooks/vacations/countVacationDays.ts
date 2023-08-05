import { VacationDate } from "@/Interfaces/vacationDate";
import dayjs from "dayjs";
import { Dispatch, SetStateAction } from "react";

const countVacationDay = (
	vacationDate: VacationDate[],
	setCountVacationDays: Dispatch<SetStateAction<any>>
) => {
	const countedDays = vacationDate.map(({ startDate, endDate }) => {
		if (startDate === "" || endDate === "") return 0;

		const differenceInDays = dayjs(endDate).diff(dayjs(startDate), "day") + 1;
		return differenceInDays;
	});

	setCountVacationDays(countedDays);
};

export default countVacationDay;
