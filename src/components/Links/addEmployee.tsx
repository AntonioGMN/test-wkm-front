import Link from "next/link";

export default function LinkAddEmployee() {
	return (
		<Link
			href={"/employee"}
			className="h-10 w-36 rounded-2xl text-center py-3 text-white font-semibold bg-blue-500"
		>
			Adicione
		</Link>
	);
}
