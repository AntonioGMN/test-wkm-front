import { z } from "zod";
import VacationDateSchema from "./vocations";

const EmployeeSchema = z.object({
	name: z.string().nonempty("Preencha o compo acima"),
	job: z.string().nonempty("Preencha o compo acima"),
	hireDate: z.string().nonempty("Preencha o compo acima"),
	vacationDates: z.array(VacationDateSchema),
});

export type Employee = z.infer<typeof EmployeeSchema>;

export default EmployeeSchema;
