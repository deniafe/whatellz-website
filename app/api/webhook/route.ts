import { NextResponse } from "next/server";
import { headers } from "next/headers";

export async function POST(req: Request) {
  const body = await req.text()
  const signature = headers().get("verif-hash") as string;
  const secretHash = process.env.FLW_SECRET_HASH;

  const data = JSON.parse(body);

  console.log('This is the webhook data frm flutterwave', body, data.email)

  if (!signature || (signature !== secretHash)) {
    // This request isn't from Flutterwave; discard
    return NextResponse.json(null, { status: 401 });
  }

  try {

    
    return NextResponse.json(null, { status: 200 });

  } catch (err) {

    console.error(err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
  
}