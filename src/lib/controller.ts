import { getFirestore, collection } from "firebase/firestore";
import { app } from "./Firebase";

export const firestore = getFirestore(app);

export const productsCollection = collection(firestore, "products");
