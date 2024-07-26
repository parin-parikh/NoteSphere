'use server';

import { auth } from "@clerk/nextjs/server";
import { adminDb } from "@/firebase-admin";

export async function createNewDocument() {
    auth().protect();

    const {sessionClaims} = await auth();

    const docCollectionsRef = adminDb.collection("documents");
    const docRef = await docCollectionsRef.add({
        title: "New Doc"
    });

    await adminDb.collection('users').doc(sessionClaims?.email!).collection('rooms').doc(docRef.id).set({
        userId: sessionClaims?.email!,
        role: "Owner",
        createdAt: new Date(),
        roomId: docRef.id,
    })

    return {docId: docRef.id};
}