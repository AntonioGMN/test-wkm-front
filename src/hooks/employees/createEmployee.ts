"use client";

import { Employee } from "@/Interfaces/employee";
import api from "@/service.ts";
import { useRouter } from "next/navigation";
import { useAlert } from "@/contexts/alertContext";
import { AxiosError } from "axios";
import UseVacationsConditions from "../vacations/validations";

interface ErrorResponse {
	message: string;
}

export default function UseCreateEmployee() {
	const { showAlert } = useAlert();
	const { validVacationConditions } = UseVacationsConditions();
	const router = useRouter();

	const createEmployee = async (employee: Employee) => {
		try {
			if (!validVacationConditions(employee.vacations)) return;

			await api.post("/employees", employee);
			router.push("/");

			return;
		} catch (error) {
			const customError = error as AxiosError<ErrorResponse>;
			const message = customError.response?.data.message;

			showAlert(
				message || "Ocorreu um erro ao cadastrar novo colaborador",
				"error"
			);
		}
	};

	return { createEmployee };
}
