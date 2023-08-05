"use client";

import { H2 } from "../Texts/h2";
import VacationPeriods from "./periods";
import { VacationsInputs } from "./vacationInput";

export function Vacations({ hireDate }: { hireDate: string }) {
	return (
		<>
			<H2>Organize as ferias do colaborador</H2>
			<div className="flex flex-col">
				<VacationPeriods />
				<VacationsInputs hireDate={hireDate} />
			</div>
		</>
	);
}
