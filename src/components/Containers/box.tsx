import { PropsWithChildren } from "react";

export default function Box({ children }: PropsWithChildren) {
	return (
		<div className="w-full h-10 mt-2 px-2 md:mt-0 md:p-0 flex justify-between items-center">
			{children}
		</div>
	);
}
