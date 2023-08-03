import { Container } from "@/components/Containers";
import Form from "@/components/form";
import { H1 } from "@/components/Texts/h1";
import { H2 } from "@/components/Texts/h2";

export default function Home() {
	return (
		<Container.Main>
			<Container.WhiteContainer>
				<H1>Cadastre um colaborador</H1>
				<Form.Container>
					<Form.Box>
						<Form.Input name="Nome" type="text" label="Nome do colaborador" />
						<Form.Input name="Cargo" type="text" label="Seu cargo" />
						<Form.Input name="nome" type="date" label="Data de entrada na empresa" />
					</Form.Box>
					<H2>Organize as ferias do colaborador</H2>
					<Form.VacationInputs />
				</Form.Container>
			</Container.WhiteContainer>
		</Container.Main>
	);
}
