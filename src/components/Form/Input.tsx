import { InputHTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	name: string;
	label: string;
}

export function Input({ name, label, ...props }: InputProps) {
	const { register } = useFormContext();

	return (
		<div className="flex flex-col gap-1">
			<label className="text-base font-medium">{label}</label>
			<input
				className="h-12 text-xl text-gray-400 rounded shadow-sm px-3 py-2 focus:outline-none focus:ring-2 "
				{...register(name)}
				{...props}
			/>
		</div>
	);
}
