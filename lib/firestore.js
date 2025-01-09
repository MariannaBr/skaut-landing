import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebaseConfig";

export async function getDataFromFirestore() {
  const querySnapshot = await getDocs(collection(db, "your-collection-name"));
  return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}
