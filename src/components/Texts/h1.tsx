import { PropsWithChildren } from "react";

export function H1({ children }: PropsWithChildren) {
	return (
		<h1 className="h-10 font-semibold text-left text-3xl m-0">{children}</h1>
	);
}
