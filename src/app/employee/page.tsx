"use client";

import { Container } from "@/components/Containers";
import Form from "@/components/Form";
import { H1 } from "@/components/Texts/h1";
import { Vacations } from "@/components/Vacations";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import EmployeeSchema from "@/schemas/employees";
import { useState } from "react";
import { Employee } from "@/Interfaces/employee";
import UseCreateEmployee from "@/hooks/employees/useCreateEmployee";

export default function Home() {
	const resolver = { resolver: zodResolver(EmployeeSchema) };
	const createEmployeeForm = useForm<Employee>(resolver);
	const { createEmployee } = UseCreateEmployee();
	const {
		handleSubmit,
		getValues,
		formState: { errors },
	} = createEmployeeForm;
	const [hireDate, setHireDate] = useState(getValues().hireDate);

	return (
		<Container.Main>
			<Container.WhiteContainer>
				<H1>Cadastre um colaborador</H1>
				<FormProvider {...createEmployeeForm}>
					<Form.Container onSubmit={handleSubmit(createEmployee)}>
						<Form.Grid>
							<Form.Box>
								<Form.Input name="name" type="text" label="Nome do colaborador" />
								<Form.ErrorMessage error={errors} type={"name"} />
							</Form.Box>
							<Form.Box>
								<Form.Input name="job" type="text" label="Seu cargo" />
								<Form.ErrorMessage error={errors} type={"job"} />
							</Form.Box>
							<Form.Box>
								<Form.Input
									name="hireDate"
									type="date"
									label="Data de entrada na empresa"
									onChange={(e) => setHireDate(e.target.value)}
								/>
								<Form.ErrorMessage error={errors} type={"hireDate"} />
							</Form.Box>
						</Form.Grid>
						<Vacations hireDate={hireDate} />
						<Form.Button>Cadastra</Form.Button>
					</Form.Container>
				</FormProvider>
			</Container.WhiteContainer>
		</Container.Main>
	);
}
