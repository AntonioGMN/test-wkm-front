import EmployeeSchema, { Employee } from "@/schemas/employees";
import { InputHTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	index: number;
	typeDate: string;
}

export function DateInput({ index, typeDate, ...props }: InputProps) {
	const {
		register,
		formState: { errors },
	} = useFormContext<Employee>();
	const registeType =
		typeDate === "startDate"
			? { ...register(`vacationDates.${index}.startDate`) }
			: { ...register(`vacationDates.${index}.endDate`) };

	console.log(typeDate);

	let errorType = errors?.vacationDates?.[index]?.startDate?.message;
	if (typeDate !== "startDate") {
		errorType = errors?.vacationDates?.[index]?.endDate?.message;
	}

	return (
		<div className="flex flex-col">
			<input
				className="h-12 text-xl bg-slate-200 px-3 py-2 focus:outline-none focus:ring-2"
				type="date"
				{...registeType}
				{...props}
			/>
			<span className="text-red-400 text-sm">{errorType}</span>
		</div>
	);
}
