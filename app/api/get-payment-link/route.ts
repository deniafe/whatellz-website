import { NextResponse } from "next/server";
import { headers } from "next/headers";
import axios from 'axios';
import { nanoid } from 'nanoid'

export async function POST(req: Request) {
  const body = await req.text()
  const signature = headers().get("whatellz") as string;

  const data = JSON.parse(body);

  console.log('tHE IS THE DATA PAYMENT', body, data.email)

  if(signature === process.env.W_SECRET_HASH) {

    const refID = nanoid()
    const amount = data.plan === 'Starter' ? '8000' : '15000'
    const title = data.plan === 'Starter' ? 'Whatellz Starter Plan' : 'Whatellz Business Plan'
    const payment_plan = data.plan === 'Starter' ? '60314' : '60315'

    try {
      const response = await axios.post(
        "https://api.flutterwave.com/v3/payments",
        {
          tx_ref: refID,
          amount,
          currency: "NGN",
          redirect_url: "http://localhost:3000/payment-successful",
          customer: {
            email: data.email
          },
          customizations: {
            title,
            // logo: "http://www.piedpiper.com/app/themes/joystick-v27/images/logo.png",
          },
          payment_plan,
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_FLW_SECRET_KEY}`,
          }
        }
      );
  
      console.log(response.data);
      return NextResponse.json(response.data, { status: 200 });
  
    } catch (err) {
  
      console.error(err);
      return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }

  } else {
    return NextResponse.json({ error: 'Unknown Error' }, { status: 400 });
  }
  
}