"use client";

import { Employee } from "@/Interfaces/employee";
import api from "@/service.ts";
import { useRouter } from "next/navigation";
import { useAlert } from "@/contexts/alertContext";
import { AxiosError } from "axios";

export default function UseCreateEmployee() {
	const { showAlert } = useAlert();
	const router = useRouter();

	const createEmployee = async (employee: Employee) => {
		try {
			await api.post("/employees", employee);
			router.push("/");
		} catch (error) {
			const customError = error as AxiosError;
			const message = customError.response?.data.message;
			console.log(error.response.data);
			console.log(customError.response?.data.message);
			showAlert(message, "error");
		}
	};

	return { createEmployee };
}
