import { doc, setDoc } from "firebase/firestore";
import { db } from "./firebaseDb";

const AddDoc = async (data) => {
    const { name, lastName } = data

    await setDoc(doc(db, 'Users', name), {
        name,
        lastName
    })

}

export {
    AddDoc
}

