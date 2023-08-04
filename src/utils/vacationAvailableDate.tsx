import dayjs from "dayjs";
import "dayjs/locale/pt-br";

function vacationMinimumDate(startDate: string) {
	const dataObj = dayjs(startDate);
	const availableDate = dataObj.add(12, "month");

	return availableDate.format("YYYY-MM-DD");
}

export default vacationMinimumDate;
