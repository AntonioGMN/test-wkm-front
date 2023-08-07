import { Employee } from "@/Interfaces/employee";
import api from ".";
import { AxiosResponse } from "axios";

interface RecevedeEmployee extends Employee {
	id: number;
}

export default async function getEmployees(): Promise<RecevedeEmployee[]> {
	const response: AxiosResponse<RecevedeEmployee[]> = await api.get(
		"/employees"
	);
	return response.data;
}
