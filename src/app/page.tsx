import { Container } from "@/components/Containers";
import LinkAddEmployee from "@/components/Links/addEmployee";
import Table from "@/components/Table";
import { H1 } from "@/components/Texts/h1";

export default function Home() {
	return (
		<Container.Main>
			<Container.WhiteContainer>
				<Container.Box>
					<H1>Colaboradores</H1>
					<LinkAddEmployee />
				</Container.Box>
				<Table />
			</Container.WhiteContainer>
		</Container.Main>
	);
}
