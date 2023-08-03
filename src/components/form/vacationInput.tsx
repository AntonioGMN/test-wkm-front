"use client";

import { ChangeEvent, InputHTMLAttributes, useState } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	name: string;
	label: string;
}

export function VacationInputs() {
	const [vacationQuantity, setVacationQuantity] = useState(1);

	const onChance = (e: ChangeEvent<HTMLInputElement>) => {
		const newVacationQuantity = parseInt(e.target.value);
		setVacationQuantity(newVacationQuantity);
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
					value={vacationQuantity}
					onChange={onChance}
				/>
			</div>
			{Array.from({ length: vacationQuantity }, (_, index) => (
				<div key={index} className="flex justify-between">
					<p className="text-2xl py-3 w-fit">{`${index + 1}° ferias:`}</p>
					<div className="flex gap-3">
						<input
							className="h-12 text-xl bg-slate-200 px-3 py-2 focus:outline-none focus:ring-2"
							type="date"
						/>
						<p className="itens-center self-center"> ~ </p>
						<input
							className="h-12 text-xl bg-slate-200 px-3 py-2 focus:outline-none focus:ring-2"
							type="date"
						/>
					</div>
				</div>
			))}
		</div>
	);
}
