import { NextRequest, NextResponse } from "next/server";
import { revalidateTag } from "next/cache";
import { Employee } from "@/Interfaces/employee";

export async function POST(request: NextRequest) {
	const secret = request.nextUrl.searchParams.get("secret");
	const tag = request.nextUrl.searchParams.get("tag");
	const employee: Employee = await request.json();
	console.log(employee);

	if (secret !== process.env.NEXT_PUBLIC_MY_SECRET_TOKEN) {
		return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
	}

	if (!tag) {
		return NextResponse.json({ message: "Missing tag param" }, { status: 400 });
	}

	const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/employees`;
	const response = await fetch(apiUrl, {
		method: "POST",
		body: JSON.stringify(employee),
	});

	if (!response.ok) {
		return new Error("Error post employees");
	}

	console.log(response.status);

	revalidateTag("employees");

	return NextResponse.json({ revalidated: true, now: Date.now() });
}
