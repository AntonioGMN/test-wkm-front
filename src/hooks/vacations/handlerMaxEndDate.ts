import { VacationDate } from "@/Interfaces/vacationDate";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";

// const handlerMaxEndDate = (index: number, vacationDate: VacationDate[]) => {
const handlerMaxEndDate = (
	index: number,
	start: string,
	countVacationDays: number[]
) => {
	if (index === 0) return dayjs(start).add(30, "days").format("YYYY-MM-DD");
	return dayjs(start).add(14, "days").format("YYYY-MM-DD");

	const daysOnVocation = countVacationDays.reduce((a, c) => a + c, 0);

	// for (const { start, end } of vacationDate) {
	// 	let diffInDays = 0;
	// 	if (start !== "" && end !== "") {
	// 		const startDate = dayjs(start);
	// 		const endDate = dayjs(end);
	// 		diffInDays = endDate.diff(startDate, "day");
	// 	}
	// 	daysOnVocation += diffInDays; // Adiciona 1 porque as datas inicial e final também são consideradas parte do período de férias
	// }

	// console.log(daysOnVocation);

	// const daysRemainingOfVacation = 30 - daysOnVocation;

	// const maxDate = dayjs(vacationDate[index].start).add(
	// 	daysRemainingOfVacation,
	// 	"days"
	// );

	// console.log("format ", maxDate.format("YYYY-MM-DD"));

	// return maxDate.format("YYYY-MM-DD");
};

export default handlerMaxEndDate;
