import { PropsWithChildren } from "react";

export function H2({ children }: PropsWithChildren) {
	return (
		<h2 className="h-10 font-semibold text-left text-3xl  my-4">{children}</h2>
	);
}
