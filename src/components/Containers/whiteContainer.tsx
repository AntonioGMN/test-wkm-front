import { PropsWithChildren } from "react";

export default function WhiteContainer({ children }: PropsWithChildren) {
	return (
		<section className="h-full w-screen md:w-3/4 md:h-3/4 md:py-3 px-2 md:px-6 bg-slate-200 md:rounded-3xl shadow-xl">
			{children}
		</section>
	);
}
