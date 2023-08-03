import { PropsWithChildren } from "react";

export default function Table() {
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
					<TR>
						<TD>The Sliding Mr. Bones (Next Stop, Pottersville)</TD>
						<TD>Malcolm Lockyer</TD>
						<TD>1961</TD>
						<TD>1961</TD>
					</TR>
					<TR>
						<TD>Witchy Woman</TD>
						<TD>The Eagles</TD>
						<TD>1972</TD>
						<TD>1972</TD>
					</TR>
					<TR>
						<TD>Shining Star</TD>
						<TD>Earth, Wind, and Fire</TD>
						<TD>1975</TD>
						<TD>1975</TD>
					</TR>
					<TR>
						<TD>Shining Star</TD>
						<TD>Earth, Wind, and Fire</TD>
						<TD>1975</TD>
						<TD>1975</TD>
					</TR>
					<TR>
						<TD>Shining Star</TD>
						<TD>Earth, Wind, and Fire</TD>
						<TD>1975</TD>
						<TD>1975</TD>
					</TR>
					<TR>
						<TD>Shining Star</TD>
						<TD>Earth, Wind, and Fire</TD>
						<TD>1975</TD>
						<TD>1975</TD>
					</TR>
					<TR>
						<TD>Shining Star</TD>
						<TD>Earth, Wind, and Fire</TD>
						<TD>1975</TD>
						<TD>1975</TD>
					</TR>
					<TR>
						<TD>Shining Star</TD>
						<TD>Earth, Wind, and Fire</TD>
						<TD>1975</TD>
						<TD>1975</TD>
					</TR>
					<TR>
						<TD>Shining Star</TD>
						<TD>Earth, Wind, and Fire</TD>
						<TD>1975</TD>
						<TD>1975</TD>
					</TR>
					<TR>
						<TD>Shining Star</TD>
						<TD>Earth, Wind, and Fire</TD>
						<TD>1975</TD>
						<TD>1975</TD>
					</TR>
					<TR>
						<TD>Shining Star</TD>
						<TD>Earth, Wind, and Fire</TD>
						<TD>1975</TD>
						<TD>1975</TD>
					</TR>
					<TR>
						<TD>Shining Star</TD>
						<TD>Earth, Wind, and Fire</TD>
						<TD>1975</TD>
						<TD>1975</TD>
					</TR>
					<TR>
						<TD>Shining Star</TD>
						<TD>Earth, Wind, and Fire</TD>
						<TD>1975</TD>
						<TD>1975</TD>
					</TR>
					<TR>
						<TD>Shining Star</TD>
						<TD>Earth, Wind, and Fire</TD>
						<TD>1975</TD>
						<TD>1975</TD>
					</TR>
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
	return <td className="py-3 h-7 max-w-xs tracking-wide">{children}</td>;
}
