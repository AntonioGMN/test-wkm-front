import { ChangeEvent, Dispatch, SetStateAction } from "react";

const changeInput =
	(obj: object, setState: Dispatch<SetStateAction<any>>) =>
	(e: ChangeEvent<HTMLInputElement>) => {
		setState({ ...obj, [e.target.name]: e.target.value });
	};

export default changeInput;
