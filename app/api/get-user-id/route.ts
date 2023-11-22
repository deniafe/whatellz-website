import { NextResponse } from "next/server";
import { admin } from "@/lib/firebase";

export async function POST(req: Request) {
  const db = admin.firestore();
  const dataRef = db.collection('users');

  const body = await req.text()
  const data = JSON.parse(body);

  try {
    // Example: Get the ID of the user with email 'deniafe@gmail.com'
    const userEmailToFind = data.email;

    // Query the Firestore collection to find the document with the specified email
    const querySnapshot = await dataRef.where('email', '==', userEmailToFind).get();

    if (querySnapshot.empty) {
      // Handle case where no user with the specified email is found
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    // Retrieve the document ID of the found user
    const userId = querySnapshot.docs[0].id;

    // Respond with the user ID
    return NextResponse.json({ userId }, { status: 200 });
  } catch (error) {
    console.error('Error getting user ID', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
