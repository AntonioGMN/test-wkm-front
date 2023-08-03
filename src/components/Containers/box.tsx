import { PropsWithChildren } from "react";

export default function Box({ children }: PropsWithChildren) {
	return (
		<div className="w-full h-10 flex justify-between items-center">
			{children}
		</div>
	);
}
