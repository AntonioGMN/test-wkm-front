// app/providers.tsx
"use client";

import AlertContextProvider from "@/contexts/alertContext";
import QueryProvider from "@/contexts/useQueryContext";
import VacationProvider from "@/contexts/vacationContext";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";

export function Providers({ children }: { children: React.ReactNode }) {
	return (
		<CacheProvider>
			<ChakraProvider>
				<AlertContextProvider>
					<QueryProvider>
						<VacationProvider>{children}</VacationProvider>
					</QueryProvider>
				</AlertContextProvider>
			</ChakraProvider>
		</CacheProvider>
	);
}
