import { PropsWithChildren } from "react";

export function H1({ children }: PropsWithChildren) {
	return (
		<h1 className="h-10 font-semibold text-leff text-2xl md:text-3xl m-0  flex items-center">
			{children}
		</h1>
	);
}
