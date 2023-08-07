import { PropsWithChildren } from "react";

export function H2({ children }: PropsWithChildren) {
	return (
		<h2 className=" font-semibold text-left text-2xl md:text-3xl  my-4">
			{children}
		</h2>
	);
}
