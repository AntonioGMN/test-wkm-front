import { Employee } from "@/Interfaces/employee";
import { revalidateTag } from "next/cache";

interface RecevedeEmployee extends Employee {
	id: number;
}

export default async function getEmployees(): Promise<RecevedeEmployee[]> {
	const response = await fetch("http://localhost:4000/employees", {
		next: { tags: ["employees"] },
	});

	if (!response.ok) {
		throw new Error("Error fetching employees");
	}

	const employeesData: RecevedeEmployee[] = await response.json();
	revalidateTag("employees");

	return employeesData;
}
