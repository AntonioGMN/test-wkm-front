import { Employee } from "@/schemas/employees";
import React from "react";
import { FieldErrors } from "react-hook-form";

interface ErrorProps {
	error: FieldErrors<Employee>;
	type: keyof Employee; // Usar "keyof Employee" para garantir que "type" seja uma chave válida em Employee
}

function ErrorMessage({ error, type }: ErrorProps) {
	if (error[type] == undefined) return;

	return (
		<span className="text-red-400 text-sm mt-2">{error[type]?.message}</span>
	);
}

export default ErrorMessage;
