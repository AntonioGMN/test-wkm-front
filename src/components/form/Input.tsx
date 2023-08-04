import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	label: string;
}

export function Input(props: InputProps) {
	return (
		<div className="flex flex-col gap-1">
			<label className="text-xl">{props.label}</label>
			<input
				className="h-12 text-xl text-gray-400 rounded shadow-sm px-3 py-2 focus:outline-none focus:ring-2 "
				{...props}
			/>
		</div>
	);
}
