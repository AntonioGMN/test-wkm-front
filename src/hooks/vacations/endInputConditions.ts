import { useVacationContext } from "@/contexts/vacationContext";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";

interface UserEndInputCondicitionRetuTypes {
	minEndDate: (index: number) => string;
	maxEndDate: (index: number) => string;
	handlerDisableEndtInput: (index: number) => boolean;
}

const UserEndInputConditions = (): UserEndInputCondicitionRetuTypes => {
	const { vacations } = useVacationContext();

	const handlerDisableEndtInput = (index: number) => {
		if (vacations[index].startDate === "") return true;
		return false;
	};

	const minEndDate = (index: number) => {
		return dayjs(vacations[index].startDate).add(1, "day").format("YYYY-MM-DD");
	};

	const maxEndDate = (index: number) => {
		const vacationDaysByPeriods = vacations.map(({ startDate, endDate }) => {
			if (startDate === "" || endDate === "") return 0;

			return dayjs(endDate).diff(dayjs(startDate), "day") + 1;
		});

		console.log(vacationDaysByPeriods);
		return dayjs(vacations[index].startDate).add(30, "days").format("YYYY-MM-DD");
	};

	return { minEndDate, maxEndDate, handlerDisableEndtInput };
};

export default UserEndInputConditions;
