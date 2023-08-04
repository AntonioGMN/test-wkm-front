"use client";

import vacationMinimumDate from "@/utils/vacationAvailableDate";
import { Dispatch, InputHTMLAttributes, SetStateAction, useState } from "react";
import { VacationDate } from "../interfaces/vacationDate";
import handlerVacationDate from "@/utils/handlerVacationDate";
import handlerVacationPeriodsQuantity from "@/utils/handlerVacationQuantity";
import dayjs from "dayjs";

interface VacationInputsProps extends InputHTMLAttributes<HTMLInputElement> {
	hireDate: string;
	vacationDate: VacationDate[];
	setVacationDate: Dispatch<SetStateAction<any>>;
}

export function VacationInputs({
	hireDate,
	vacationDate,
	setVacationDate,
}: VacationInputsProps) {
	const vacationMinDate = vacationMinimumDate(hireDate);
	const [vacationPeriodsQuantity, setVacationPeriodsQuantity] = useState(1);
	const [countVacationDays, setCountVacationDays] = useState([]);

	const handlerDisableStartInput = (index: number) => {
		if (index == 0) return false;

		if (vacationDate[index - 1].end === "") return true;
		return false;
	};

	const handlerMinStartDate = (index: number) => {
		if (index == 0) return vacationMinDate;

		return vacationDate[index - 1].end;
	};

	const handlerMaxEndDate = (index: number) => {
		const daysOnVocation = countVacationDays.reduce((a, c) => a + c, 0);
		const daysRemainingOfVacation = 29 - daysOnVocation;

		const maxDate = dayjs(vacationDate[index].start).add(
			daysRemainingOfVacation,
			"days"
		);

		return maxDate.format("YYYY-MM-DD");
	};

	return (
		<div className="flex flex-col">
			<div className="flex">
				<label className="w-2/3 text-2xl py-3">
					Em quantos periodos gostaria de dividir as férias?
				</label>
				<input
					className="h-12 w-16 text-xl rounded shadow-sm px-3 py-2 text-zinc-800 focus:outline-none focus:ring-2 "
					type="number"
					min={1}
					max={3}
					value={vacationPeriodsQuantity}
					onChange={handlerVacationPeriodsQuantity(
						vacationPeriodsQuantity,
						setVacationPeriodsQuantity,
						vacationDate,
						setVacationDate
					)}
				/>
			</div>
			{Array.from({ length: vacationDate.length }, (_, index) => (
				<div key={index} className="flex justify-between">
					<p className="text-2xl py-3 w-fit">{`${index + 1}° ferias:`}</p>
					<div className="flex gap-3">
						<input
							name="start"
							className="h-12 text-xl bg-slate-200 px-3 py-2 focus:outline-none focus:ring-2"
							type="date"
							min={handlerMinStartDate(index)}
							disabled={handlerDisableStartInput(index)}
							onChange={handlerVacationDate(
								index,
								vacationDate,
								setVacationDate,
								setCountVacationDays
							)}
						/>
						<p className="itens-center self-center"> ~ </p>
						<input
							name="end"
							className="h-12 text-xl bg-slate-200 px-3 py-2 focus:outline-none focus:ring-2"
							type="date"
							disabled={vacationDate[index].start === ""}
							min={vacationDate[index].start}
							max={handlerMaxEndDate(index)}
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
		</div>
	);
}
