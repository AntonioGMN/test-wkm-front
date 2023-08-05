import { PropsWithChildren } from "react";

export default function Box({ children }: PropsWithChildren) {
	return <div className="w-full flex flex-col">{children}</div>;
}
