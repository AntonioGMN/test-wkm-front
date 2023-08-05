import { Employee } from "@/Interfaces/employee";
import api from "@/service.ts";
import { useMutation } from "react-query";

const loginFunction = async (employee: Employee): Promise<any> =>
	api.post("/employees", employee);

const handlerSuccess = () => {
	console.log("tudo certo");
};

const handlerError = (error: Error) => {
	console.log("----deu erro----");
	console.log(error);
};

export function useCreateEmploy() {
	return useMutation({
		mutationFn: loginFunction,
		onSuccess: handlerSuccess,
		onError: handlerError,
	});
}
