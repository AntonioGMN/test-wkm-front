import {
	FormHTMLAttributes,
	InputHTMLAttributes,
	PropsWithChildren,
} from "react";

//interface FomrProps extends FormHTMLAttributes<HTml> {}

export default function Container({ children }: PropsWithChildren) {
	return <form className="w-full mt-3">{children}</form>;
}
