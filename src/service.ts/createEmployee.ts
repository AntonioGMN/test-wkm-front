import { Employee } from "@/Interfaces/employee";
import api from ".";

export default async function createEmployee(employee: Employee) {
	console.log("/////////////////////////////////");
	console.log("Enviou");
	const response = await api.post("/employees", employee);
	console.log(response);
	return response;
}
