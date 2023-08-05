import VacationPeriods from "@/components/Vacations/periods";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import VacationProvider from "../contexts/vacationContext";
import QueryProvider from "../contexts/useQueryContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Teste WM",
	description: "Ótimo projeto",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="pt-br">
			<VacationProvider>
				<QueryProvider>
					<body className={inter.className}>{children}</body>
				</QueryProvider>
			</VacationProvider>
		</html>
	);
}
