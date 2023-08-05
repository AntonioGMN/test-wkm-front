"use client";

import { InputHTMLAttributes, useState } from "react";
import handlerVacationDate from "@/hooks/vacations/handlerVacationDate";
import handlerDisableStartInput from "@/hooks/vacations/handlerDisableStartInput";
import handlerMaxEndDate from "@/hooks/vacations/handlerMaxEndDate";
import handlerMinStartDate from "@/hooks/vacations/handlerMinStartDate";
import { useVacation } from "@/contexts/vacationContext";
import { useFormContext } from "react-hook-form";
import { DateInput } from "../Form/dateInput";

interface VacationInputsProps extends InputHTMLAttributes<HTMLInputElement> {
	hireDate: string;
}

export function VacationsInputs({ hireDate }: VacationInputsProps) {
	const [countVacationDays, setCountVacationDays] = useState([0]);
	const { vacationDate, setVacationDate } = useVacation();

	console.log(vacationDate[0]);

	return (
		<>
			{Array.from({ length: vacationDate.length }, (_, index) => (
				<div key={index} className="flex justify-between">
					<p className="text-2xl py-3 w-fit">{`${index + 1}° ferias:`}</p>
					<div className="flex gap-3">
						<DateInput
							typeDate="startDate"
							index={index}
							min={handlerMinStartDate(index, hireDate, vacationDate)}
							disabled={handlerDisableStartInput(index, vacationDate)}
							onChange={handlerVacationDate(
								index,
								vacationDate,
								setVacationDate,
								setCountVacationDays
							)}
						/>
						<p className="itens-center self-center"> ~ </p>
						<DateInput
							typeDate="endDate"
							index={index}
							//disabled={vacationDate[index].startDate === ""}
							min={vacationDate[index].startDate}
							max={handlerMaxEndDate(
								index,
								vacationDate[index].startDate,
								countVacationDays
							)}
							onChange={handlerVacationDate(
								index,
								vacationDate,
								setVacationDate,
								setCountVacationDays
							)}
						/>
					</div>
				</div>
			))}
		</>
	);
}
