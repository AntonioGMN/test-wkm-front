"use client";

import vacationMinimumDate from "@/utils/vacationAvailableDate";
import { Dispatch, InputHTMLAttributes, SetStateAction, useState } from "react";
import { VacationDate } from "../interfaces/vacationDate";
import handlerVacationDate from "@/utils/handlerVacationDate";
import handlerVacationQuantity from "@/utils/handlerVacationQuantity";

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
	const [vacationQuantity, setVacationQuantity] = useState(1);
	const [availableDates, setAvailableDates] = useState([vacationMinDate]);

	console.log(availableDates);

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
					value={vacationQuantity}
					onChange={handlerVacationQuantity(
						vacationQuantity,
						setVacationQuantity,
						vacationDate,
						setVacationDate,
						availableDates,
						setAvailableDates
					)}
				/>
			</div>
			{Array.from({ length: vacationQuantity }, (_, index) => (
				<div key={index} className="flex justify-between">
					<p className="text-2xl py-3 w-fit">{`${index + 1}° ferias:`}</p>
					<div className="flex gap-3">
						<input
							name="start"
							className="h-12 text-xl bg-slate-200 px-3 py-2 focus:outline-none focus:ring-2"
							type="date"
							min={availableDates[index]}
							onChange={handlerVacationDate(
								index,
								vacationDate,
								setVacationDate,
								availableDates,
								setAvailableDates
							)}
						/>
						<p className="itens-center self-center"> ~ </p>
						<input
							name="end"
							className="h-12 text-xl bg-slate-200 px-3 py-2 focus:outline-none focus:ring-2"
							type="date"
							min={availableDates[index]}
							onChange={handlerVacationDate(
								index,
								vacationDate,
								setVacationDate,
								availableDates,
								setAvailableDates
							)}
						/>
					</div>
				</div>
			))}
		</div>
	);
}
