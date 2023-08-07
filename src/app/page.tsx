import { Container } from "@/components/Containers";
import LinkButton from "@/components/Links/linkButton";
import Table from "@/components/Table";
import { H1 } from "@/components/Texts/h1";

export default async function Home() {
	return (
		<Container.Main>
			<Container.WhiteContainer>
				<Container.Box>
					<H1>Colaboradores</H1>
					<LinkButton href="/employees">Adicionar</LinkButton>
				</Container.Box>
				<Table />
			</Container.WhiteContainer>
		</Container.Main>
	);
}
