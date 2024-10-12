import dbConnect from "@/lib/db-connect";

export const dynamic = "force-dynamic"; // defaults to auto
export async function GET(request: Request) {
  await dbConnect();
  return Response.json({
    data: {
      success: true,
    },
  });
}

export async function POST(request: Request) {
  await dbConnect();
  return Response.json({
    data: {
      success: true,
    },
  });
}

