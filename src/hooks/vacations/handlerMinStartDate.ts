import { VacationDate } from "@/Interfaces/vacationDate";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";

const handlerMinStartDate = (
	index: number,
	hireDate: string,
	vacationDate: VacationDate[]
) => {
	if (index == 0) return dayjs(hireDate).add(12, "month").format("YYYY-MM-DD");

	return vacationDate[index - 1].endDate;
};

export default handlerMinStartDate;
