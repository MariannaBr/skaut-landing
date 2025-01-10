import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebaseConfig";

export async function getDataFromFirestore() {
  const querySnapshot = await getDocs(collection(db, "users"));
  return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}
