import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export default function SubmitButtom(props: ButtonProps) {
	return (
		<button
			type="submit"
			className="h-12 w-fit mt-3 px-6 text-white text-xl text-center absolute bottom-0 right-0 font-medium bg-blue-500 rounded-full"
			{...props}
		/>
	);
}
