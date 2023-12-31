import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { admin } from "@/lib/firebase";

export async function POST(req: Request) {
  const db = admin.firestore();
  const dataRef = db.collection('users');


  const body = await req.text()
  const signature = headers().get("verif-hash") as string;
  const secretHash = process.env.NEXT_PUBLIC_FLW_SECRET_HASH;

  const data = JSON.parse(body);

  console.log('This is the webhook data frm flutterwave', body, data)

  if (!signature || (signature !== secretHash)) {
    // This request isn't from Flutterwave; discard
    return NextResponse.json(null, { status: 401 });
  }

  try {

    // If charge is completed
    if(data.event === 'charge.completed') {
        const flwData = data.data
        // Example: Update user with email 'deniafe@gmail.com'
        const userEmailToUpdate = flwData.customer.email;
        const status = flwData.status
        const amount = flwData.charged_amount
        const plan = String(amount) === '8000' ? 'starter' : 'business'

        if(status === 'successful') {

            // Step 1: Query the Firestore collection to find the document with the specified email
          const querySnapshot = await dataRef.where('email', '==', userEmailToUpdate).get();

          if (querySnapshot.empty) {
            // Handle case where no user with the specified email is found
            return NextResponse.json({ error: 'User email not found' }, { status: 404 });
          }

          // Step 2: Update the found document with the new data
          const userDoc = querySnapshot.docs[0];
          const userDataToUpdate = {
            subscription: {
              subscriptionstartDate: new Date(),
              subscriptionStatus: 'active',
              subscriptionType: plan
            },
          };

          await userDoc.ref.update(userDataToUpdate);

        }
    }
    
    return NextResponse.json(null, { status: 200 });

  } catch (err) {

    console.error(err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
  
}