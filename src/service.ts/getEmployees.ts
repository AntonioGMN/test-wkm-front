import { Employee } from "@/Interfaces/employee";
import api from ".";
import { AxiosResponse } from "axios";

interface RecevedeEmployee extends Employee {
	id: number;
}

export default async function getEmployees(): Promise<RecevedeEmployee[]> {
	console.log("/////////////////////////////////");
	console.log("pegou");
	const response: AxiosResponse<RecevedeEmployee[]> = await api.get(
		"/employees"
	);
	return response.data;
}
