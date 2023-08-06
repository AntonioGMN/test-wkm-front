import getEmployees from "@/service.ts/getEmployees";
import formatDate from "@/utils/formatDate";
import { PropsWithChildren } from "react";

export default async function Table() {
	const employees = [];

	if (employees.length === 0)
		return (
			<div className="w-full h-full flex items-center justify-center">
				<p className="text-2xl text-center ">
					Ainda não possui nenhum colaborador cadastrdo
				</p>
			</div>
		);

	return (
		<div className="w-full max-h-ocupation overflow-y-auto mt-3">
			<table className="w-full table-auto">
				<thead className="w-full sticky top-0 z-1 ">
					<tr className="bg-slate-400 rounded-t-lg">
						<TH>Nome</TH>
						<TH>Cargo</TH>
						<TH>Data de Contratação</TH>
						<TH>Ferias</TH>
					</tr>
				</thead>
				<tbody>
					{/* {employees.map(({ id, name, job, hireDate, vacations }) => (
						<TR key={id}>
							<TD>{name}</TD>
							<TD>{job}</TD>
							<TD>{formatDate(hireDate)}</TD>
							<TD>
								{vacations.map(({ startDate, endDate }) => (
									<p key={startDate}>
										{formatDate(startDate)} - {formatDate(endDate)}
									</p>
								))}
							</TD>
						</TR>
					))} */}
				</tbody>
			</table>
		</div>
	);
}

function TH({ children }: PropsWithChildren) {
	return (
		<th className="py-3 font-semibold tracking-wide text-white">{children}</th>
	);
}

function TR({ children }: PropsWithChildren) {
	return <tr className="">{children}</tr>;
}

function TD({ children }: PropsWithChildren) {
	return (
		<td className="py-3 h-7 max-w-xs tracking-wide text-center">{children}</td>
	);
}
