import { Employee } from "@/Interfaces/employee";
import api from ".";

export default async function apiCreateEmployees(
	employee: Employee
): Promise<void> {
	//await api.post("/employees", employee);
	const params = `?tag=employees&secret=${process.env.NEXT_PUBLIC_MY_SECRET_TOKEN}`;
	const url = `${process.env.NEXT_PUBLIC_MY_SITE_URL}/api/employees${params}`;
	const response = await fetch(url, {
		method: "POST",
		body: JSON.stringify(employee),
	});

	return await response.json();
}
