import data from "./firebase-data.json";
import { doc, setDoc } from "firebase/firestore";
import { async } from "q";

export function importData(db) {
    data.forEach((post) => addDocToDB({ key: post.title, ...post}, db));
}

export async function addDocToDB(object,db) {
    await setDoc(doc(db, "posts", object.title), object)
    //строка выше знач, что через ф-ю doc я в БД, в коллекцию "posts", к объекту с опр тайтлом (тайтл исп как айдишник поста) добавляю object
} // object - это то как внутри ф-ии будет назван второй параметр 