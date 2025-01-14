import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebaseConfig.js";

export async function getDataFromFirestore() {
  const querySnapshot = await getDocs(collection(db, "users"));
  return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}

export async function getFirestoreData() {
  const snapshot = await db.collection("users").get();
  snapshot.forEach((doc) => {
    console.log(doc.id, "=>", doc.data());
  });
}
