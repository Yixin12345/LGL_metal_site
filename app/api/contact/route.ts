import { NextResponse } from "next/server";

type ContactPayload = {
  name?: unknown;
  company?: unknown;
  email?: unknown;
  phone?: unknown;
  serviceNeeded?: unknown;
  message?: unknown;
};

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { message: "Invalid request payload." },
      { status: 400 },
    );
  }

  if (!isNonEmptyString(payload.name)) {
    return NextResponse.json(
      { message: "Please provide your name." },
      { status: 400 },
    );
  }

  const email = isNonEmptyString(payload.email) ? payload.email : null;

  if (!email || !email.includes("@")) {
    return NextResponse.json(
      { message: "Please provide a valid email address." },
      { status: 400 },
    );
  }

  if (!isNonEmptyString(payload.message)) {
    return NextResponse.json(
      { message: "Please add a short message about your requirements." },
      { status: 400 },
    );
  }

  return NextResponse.json({
    message:
      "Thanks for reaching out. This inquiry flow is ready to connect to your live inbox or CRM workflow.",
  });
}
