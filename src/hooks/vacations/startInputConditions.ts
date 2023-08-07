import { useVacationContext } from "@/contexts/vacationContext";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";

interface UseStartInputCondicitionRetuTypes {
	minStartDate: (index: number, hireDate: string) => string;
	handlerDisableStartInput: (index: number) => boolean;
}

const UseStartInputConditions = (): UseStartInputCondicitionRetuTypes => {
	const { vacations } = useVacationContext();

	const handlerDisableStartInput = (index: number) => {
		if (index == 0) return false;

		if (vacations[index - 1].endDate === "") return true;
		return false;
	};

	const minStartDate = (index: number, hireDate: string) => {
		if (index == 0) return dayjs(hireDate).add(12, "month").format("YYYY-MM-DD");

		return dayjs(vacations[index - 1].endDate)
			.add(2, "day")
			.format("YYYY-MM-DD");
	};

	return { minStartDate, handlerDisableStartInput };
};

export default UseStartInputConditions;
