"use client";

import { InputHTMLAttributes } from "react";
import { DateInput } from "../Form/dateInput";
import { useVacationContext } from "@/contexts/vacationContext";
import UseHandlerVacations from "@/hooks/vacations/handlerVacations";
import UseStartInputConditions from "@/hooks/vacations/startInputConditions";
import UserEndInputConditions from "@/hooks/vacations/endInputConditions";

interface VacationInputsProps extends InputHTMLAttributes<HTMLInputElement> {
	hireDate: string;
}

export function VacationsInputs({ hireDate }: VacationInputsProps) {
	const { vacationPeriodsQuantity } = useVacationContext();
	const { minStartDate, handlerDisableStartInput } = UseStartInputConditions();
	const { minEndDate, maxEndDate, handlerDisableEndtInput } =
		UserEndInputConditions();
	const { handlerVacationDate } = UseHandlerVacations();

	return (
		<>
			{Array.from({ length: vacationPeriodsQuantity }, (_, index) => (
				<div key={index} className="flex justify-between">
					<p className="text-2xl py-3 w-fit">{`${index + 1}° ferias:`}</p>
					<div className="flex gap-3">
						<DateInput
							typeDate="startDate"
							index={index}
							min={minStartDate(index, hireDate)}
							disabled={handlerDisableStartInput(index)}
							onChange={handlerVacationDate(index)}
						/>
						<p className="itens-center self-center">-</p>
						<DateInput
							typeDate="endDate"
							index={index}
							disabled={handlerDisableEndtInput(index)}
							min={minEndDate(index)}
							max={maxEndDate(index)}
							onChange={handlerVacationDate(index)}
						/>
					</div>
				</div>
			))}
		</>
	);
}
