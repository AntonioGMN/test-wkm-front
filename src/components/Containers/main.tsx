import { PropsWithChildren } from "react";

export default function Main({ children }: PropsWithChildren) {
	return (
		<main className="w-screen h-screen relative flex justify-center items-center bg-gradient-to-r from-cyan-500 to-blue-500">
			{children}
		</main>
	);
}
