import { Employee } from "@/Interfaces/employee";
import api from "@/service.ts";
import axios, { AxiosError } from "axios";
import UseVacationsConditions from "../vacations/validations";
import UseAlert from "../useAlert";
import { useRouter } from "next/navigation";
import apiCreateEmployees from "@/service.ts/createEmployee";

interface ErrorResponse {
	message: string;
}

export default function UseCreateEmployee() {
	const { showAlert } = UseAlert();
	const { validVacationConditions } = UseVacationsConditions();
	const router = useRouter();

	const createEmployee = async (employee: Employee) => {
		try {
			if (!validVacationConditions(employee.vacations)) return;
			await apiCreateEmployees(employee);
			//await api.post("/employees", employee);
			//await axios.post(url);
			//router.push("/");
			showAlert("Colaborador cadastrado com sucesso", "success");
			return;
		} catch (error) {
			const customError = error as AxiosError<ErrorResponse>;
			const message = customError.response?.data.message;

			console.log(error);

			showAlert(
				message || "Ocorreu um erro ao cadastrar novo colaborador",
				"error"
			);
		}
	};

	return { createEmployee };
}
