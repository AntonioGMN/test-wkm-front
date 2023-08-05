import { PropsWithChildren } from "react";

export default function Grid({ children }: PropsWithChildren) {
	return <div className="w-full grid grid-cols-2 gap-4">{children}</div>;
}
