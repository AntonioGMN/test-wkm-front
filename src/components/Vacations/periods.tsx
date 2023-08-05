import { useVacation } from "@/contexts/vacationContext";
import handlerVacationPeriodsQuantity from "@/hooks/vacations/handlerVacationQuantity";

export default function VacationPeriods() {
	const { vacationDate, setVacationDate } = useVacation();
	const vacationPeriodsQuantity = vacationDate.length;

	return (
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
				onChange={handlerVacationPeriodsQuantity(vacationDate, setVacationDate)}
			/>
		</div>
	);
}
