import { auth } from "@/lib/auth";
import { toNextJsHandler } from "better-auth/next-js";
import { NextResponse } from "next/server";

const handler = toNextJsHandler(auth);

export async function GET(req) {
  return handler.GET(req);
}

export async function POST(req) {
  const response = await handler.POST(req);
  return response;
}