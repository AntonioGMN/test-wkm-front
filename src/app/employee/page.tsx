"use client";

import { Container } from "@/components/Containers";
import Form from "@/components/form";
import { H1 } from "@/components/Texts/h1";
import { H2 } from "@/components/Texts/h2";
import { useState } from "react";
import changeInput from "@/utils/changeInput";

export default function Home() {
	const [formData, setFormData] = useState({
		name: "",
		job: "",
		hireDate: "",
	});

	console.log(formData);

	return (
		<Container.Main>
			<Container.WhiteContainer>
				<H1>Cadastre um colaborador</H1>
				<Form.Container>
					<Form.Box>
						<Form.Input
							name="name"
							onChange={changeInput(formData, setFormData)}
							type="text"
							label="Nome do colaborador"
						/>
						<Form.Input
							name="job"
							onChange={changeInput(formData, setFormData)}
							type="text"
							label="Seu cargo"
						/>
						<Form.Input
							name="hireDate"
							onChange={changeInput(formData, setFormData)}
							type="date"
							label="Data de entrada na empresa"
						/>
					</Form.Box>
					<H2>Organize as ferias do colaborador</H2>
					<Form.VacationInputs hireDate={formData.hireDate} />
				</Form.Container>
			</Container.WhiteContainer>
		</Container.Main>
	);
}
