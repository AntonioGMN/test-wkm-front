import dayjs from "dayjs";
import "dayjs/locale/pt-br";

export default function vacationAvailableDate(startDate: string) {
	const dataObj = dayjs(startDate);
	const availableDate = dataObj.add(12, "month");

	console.log(availableDate);
	return availableDate;
}
