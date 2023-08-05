import { VacationDate } from "@/Interfaces/vacationDate";

const handlerDisableStartInput = (
	index: number,
	vacationDate: VacationDate[]
) => {
	if (index == 0) return false;

	if (vacationDate[index - 1].endDate === "") return true;
	return false;
};

export default handlerDisableStartInput;
