import { useToast } from "@chakra-ui/react";

export default function UseAlert() {
	const toast = useToast();

	const showAlert = (
		message: string,
		receverType: "success" | "error" | "warning"
	) => {
		toast({
			title: message,
			status: receverType,
			duration: 3000,
			isClosable: true,
			position: "bottom-left",
		});
	};

	return { showAlert };
}
