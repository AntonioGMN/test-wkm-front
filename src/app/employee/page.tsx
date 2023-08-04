"use client";

import { Container } from "@/components/Containers";
import Form from "@/components/form";
import { VacationDate } from "@/components/interfaces/vacationDate";
import { H1 } from "@/components/Texts/h1";
import { H2 } from "@/components/Texts/h2";
import handlerInputChange from "@/utils/handlerInputChange";
import { useState } from "react";

export default function Home() {
	const [formData, setFormData] = useState({
		name: "",
		job: "",
		hireDate: "",
	});
	const [vacationDate, setVacationDate] = useState<VacationDate[]>([
		{
			start: "",
			end: "",
		},
	]);

	console.log(formData);
	console.log(vacationDate);

	return (
		<Container.Main>
			<Container.WhiteContainer>
				<H1>Cadastre um colaborador</H1>
				<Form.Container>
					<Form.Box>
						<Form.Input
							name="name"
							onChange={handlerInputChange(formData, setFormData)}
							type="text"
							label="Nome do colaborador"
						/>
						<Form.Input
							name="job"
							onChange={handlerInputChange(formData, setFormData)}
							type="text"
							label="Seu cargo"
						/>
						<Form.Input
							name="hireDate"
							onChange={handlerInputChange(formData, setFormData)}
							type="date"
							label="Data de entrada na empresa"
						/>
					</Form.Box>
					{formData.hireDate !== "" && (
						<>
							<H2>Organize as ferias do colaborador</H2>
							<Form.VacationInputs
								hireDate={formData.hireDate}
								vacationDate={vacationDate}
								setVacationDate={setVacationDate}
							/>
						</>
					)}
				</Form.Container>
			</Container.WhiteContainer>
		</Container.Main>
	);
}
