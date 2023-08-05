import { Employee } from "@/schemas/employees";

export default async function createEmployee(employee: Employee) {
	console.log(employee);
	//const response = await api.post("/employees", employee);
	////console.log(response.data);
	return "response";
}
