import { Employee } from "@/Interfaces/employee";
import { useVacationContext } from "@/contexts/vacationContext";
import { ChangeEvent } from "react";
import { useFormContext } from "react-hook-form";

interface UseVacationPeriodsQuantityReturnType {
	handlerVacationPeriodsQuantity: (e: ChangeEvent<HTMLInputElement>) => void;
}

const UseVacationPeriodsQuantity = (): UseVacationPeriodsQuantityReturnType => {
	const { setValue, getValues } = useFormContext<Employee>();
	const {
		vacationPeriodsQuantity,
		setVacationPeriodsQuantity,
		vacations,
		setVacations,
	} = useVacationContext();

	const handlerVacationPeriodsQuantity = (e: ChangeEvent<HTMLInputElement>) => {
		const newVacationPeriodsQuantity = parseInt(e.target.value);
		console.log(newVacationPeriodsQuantity);

		if (
			newVacationPeriodsQuantity > vacationPeriodsQuantity &&
			vacationPeriodsQuantity < 3
		) {
			setVacations([...vacations, { startDate: "", endDate: "" }]);
			setVacationPeriodsQuantity(vacationPeriodsQuantity + 1);
		}

		if (
			newVacationPeriodsQuantity < vacationPeriodsQuantity &&
			vacationPeriodsQuantity !== 1
		) {
			const vacations = getValues().vacations || [];
			vacations.pop();
			setVacations([...vacations]);
			setValue("vacations", vacations);
			setVacationPeriodsQuantity(vacationPeriodsQuantity - 1);
		}
	};

	return { handlerVacationPeriodsQuantity };
};

export default UseVacationPeriodsQuantity;
