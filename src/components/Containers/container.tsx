import { PropsWithChildren } from "react";

export default function WhiteContainer({ children }: PropsWithChildren) {
	return (
		<section className="w-3/4 h-3/4 py-3 px-6 bg-slate-200 rounded-3xl shadow-xl">
			{children}
		</section>
	);
}
