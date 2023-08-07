import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export default function SubmitButtom(props: ButtonProps) {
	return (
		<button
			type="submit"
			className="h-12 w-fit px-6 text-white text-xl text-center font-medium bg-blue-500 rounded-full flex items-center"
			{...props}
		/>
	);
}
