import {
	FormHTMLAttributes,
	InputHTMLAttributes,
	PropsWithChildren,
} from "react";

//interface FomrProps extends FormHTMLAttributes<HTml> {}

export default function Box({ children }: PropsWithChildren) {
	return (
		<div className="w-full grid grid-cols-2 gap-4 text-gray-500">{children}</div>
	);
}
