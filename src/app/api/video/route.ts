import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const result = await req.formData();

    return NextResponse.json(
      { data: result, message: "sccusse" },
      { status: 400 }
    );
  } catch (e) {
    return NextResponse.json({ data: [], message: e }, { status: 400 });
  }
}
