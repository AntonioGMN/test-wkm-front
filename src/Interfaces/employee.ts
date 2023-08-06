import EmployeeSchema from "@/schemas/employees";
import { z } from "zod";

export type Employee = z.infer<typeof EmployeeSchema>;
