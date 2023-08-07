import { ReactNode } from "react";
import Link from "next/link";

interface LinkButtonProps {
	href: string;
	children: ReactNode;
}

export default function LinkButton({ href, children }: LinkButtonProps) {
	return (
		<Link
			href={href}
			className="h-12 w-fit px-6 text-white text-xl text-center font-medium bg-blue-500 rounded-full flex items-center"
		>
			{children}
		</Link>
	);
}
