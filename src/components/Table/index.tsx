import getEmployees from "@/service.ts/getEmployees";
import { PropsWithChildren } from "react";

export default async function Table() {
	const employees = await getEmployees();
	console.log(employees);

	if (employees === undefined) return "";

	return (
		<div className="w-full max-h-ocupation overflow-y-auto mt-3">
			<table className="w-full table-auto rounded-t-lg ">
				<thead className="rounded-t-lg">
					<tr className="w-full bg-slate-400 rounded-t-lg">
						<TH>Nome</TH>
						<TH>Cargo</TH>
						<TH>Data de Contratação</TH>
						<TH>Ferias</TH>
					</tr>
				</thead>
				<tbody>
					{employees.map((employee) => (
						<TR key={employee.id}>
							<TD>{employee.name}</TD>
							<TD>{employee.job}</TD>
							<TD>{employee.hireDate}</TD>
							<TD>
								{employee.vacations.map((vacation) => (
									<p key={vacation.startDate}>
										{vacation.startDate} ~ {vacation.endDate}
									</p>
								))}
							</TD>
						</TR>
					))}
				</tbody>
			</table>
		</div>
	);
}

function TH({ children }: PropsWithChildren) {
	return (
		<th className="py-3 font-semibold tracking-wide text-left text-white">
			{children}
		</th>
	);
}

function TR({ children }: PropsWithChildren) {
	return <tr className="">{children}</tr>;
}

function TD({ children }: PropsWithChildren) {
	return <td className="py-3 h-7 max-w-xs tracking-wide ">{children}</td>;
}
