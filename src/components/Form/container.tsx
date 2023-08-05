import { FormHTMLAttributes } from "react";

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {}

export default function Container(props: FormProps) {
	return <form className="w-full h-[91%] mt-3 relative" {...props} />;
}
