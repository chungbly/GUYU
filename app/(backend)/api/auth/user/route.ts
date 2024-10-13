import { auth } from "@/auth";
import { API_STATUS } from "@/models/API";
import { NextResponse } from "next/server";

export const GET = auth(function GET(req) {
  if (req.auth)
    return NextResponse.json({
      status: API_STATUS.OK,
      message: "",
      data: req.auth.user,
    });
  return NextResponse.json(
    { message: "Not authenticated", status: API_STATUS.ERROR },
    { status: 401 }
  );
});
