import { Employee } from "@/Interfaces/employee";
import api from ".";

export default async function createEmployee(employee: Employee) {
	const response = await api.post("/employees", employee);
	console.log(response);
	return response;
}
