import { z } from "zod";

const VacationDateSchema = z.object({
	startDate: z.string().nonempty("Preencha o campo acima"),
	endDate: z.string().nonempty("Preencha o campo acima"),
});

export default VacationDateSchema;
