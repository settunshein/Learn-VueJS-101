import { ref } from "vue";
import { db } from "../firebase/config";
import { doc, getDoc } from "firebase/firestore";

let getPost = (id) => {
  let post = ref(null);
  let error = ref("");

  let load = async () => {
    try {
      /*
			ဒီရေးထုံးက Firebase SDK Version အသစ်မှာ အလုပ်မလုပ်တော့ဘူး။
      let doc = await db.collection("posts").doc(id).get();
      post.value = { id: doc.id, ...doc.data };
			*/

      const docRef = doc(db, "posts", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        post.value = { id: docSnap.id, ...docSnap.data() };
      } else {
        error.value = "Document Does Not Exist";
        console.warn("404, Document Not Found!");
      }
    } catch (err) {
      error.value = err.message;
      console.error("Error Loading Posts: ", err);
    }
  };

  return { post, error, load };
};

export default getPost;
