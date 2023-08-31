import { Employee } from "@/Interfaces/employee";
import React from "react";
import { useFormContext } from "react-hook-form";

interface ErrorProps {
	type: keyof Employee;
}

function ErrorMessage({ type }: ErrorProps) {
	const {
		formState: { errors },
	} = useFormContext<Employee>();

	if (errors[type] == undefined) return;

	return (
		<span className="text-red-400 text-sm mt-2">{errors[type]?.message}</span>
	);
}

export default ErrorMessage;
