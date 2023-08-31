"use client";

import VacationProvider from "@/contexts/vacationContext";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";

export function Providers({ children }: { children: React.ReactNode }) {
	return (
		<CacheProvider>
			<ChakraProvider>
				<VacationProvider>{children}</VacationProvider>
			</ChakraProvider>
		</CacheProvider>
	);
}
