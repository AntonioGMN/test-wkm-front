import { PropsWithChildren } from "react";

export default function BoxRelative({ children }: PropsWithChildren) {
	return (
		<div className="w-full flex justify-end gap-8  absolute bottom-0 right-0">
			{children}
		</div>
	);
}
