import VacationDate from "@/Interfaces/vacationDate";
import UseAlert from "../useAlert";
import dayjs from "dayjs";

export default function UseVacationsConditions(): {
	validVacationConditions: (vacations: VacationDate[]) => boolean;
} {
	const { showAlert } = UseAlert();

	const validVacationConditions = (vacations: VacationDate[]): boolean => {
		const vacationDaysForPeriod = vacations.map((v) => {
			const start = dayjs(v.startDate);
			const end = dayjs(v.endDate);
			if (start.isAfter(end)) {
				showAlert(
					"A data de término das férias precisa ser após a data de início",
					"warning"
				);
				return false;
			}
			return end.diff(start, "days") + 1;
		});

		const numericVacationDays = vacationDaysForPeriod.filter(
			(v) => typeof v === "number"
		);

		const totalVacationDays = vacations.reduce((sum, v) => {
			const start = dayjs(v.startDate);
			const end = dayjs(v.endDate);
			const days = end.diff(start, "days") + 1;
			return sum + days;
		}, 0);

		if (totalVacationDays > 30) {
			showAlert("Não é permitido cadastrar mais que 30 dias de férias", "warning");
			return false;
		}

		if (numericVacationDays.some((v) => (v as number) < 5)) {
			showAlert(
				"Não é permitido cadastrar um período de férias com duração menor que 5 dias",
				"warning"
			);
			return false;
		}

		if (
			numericVacationDays.length > 1 &&
			numericVacationDays.every((v) => (v as number) < 14)
		) {
			showAlert(
				"Quando você divide suas férias, ao menos um período tem que ter mais que 14 dias",
				"warning"
			);
			return false;
		}

		return true;
	};

	return { validVacationConditions };
}
