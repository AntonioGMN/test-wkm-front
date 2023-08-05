import { ChangeEvent, Dispatch, SetStateAction } from "react";

const handlerInputChange =
	(obj: object, setState: Dispatch<SetStateAction<any>>) =>
	(e: ChangeEvent<HTMLInputElement>) => {
		setState({ ...obj, [e.target.name]: e.target.value });
	};

export default handlerInputChange;
