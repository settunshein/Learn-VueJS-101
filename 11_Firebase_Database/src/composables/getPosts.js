import { ref } from "vue";
import { db } from "../firebase/config";
import { collection, getDocs, query, orderBy } from "firebase/firestore";

let getPosts = () => {
  let posts = ref([]);
  let error = ref("");

  let load = async () => {
    try {
      /*
      ဒီရေးထုံးက Firebase SDK Version အသစ်မှာ အလုပ်မလုပ်တော့ဘူး။
      let res = await db.collection("posts").get();
      posts.value = res.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      */

      const q = query(collection(db, "posts"), orderBy("created_at", "desc"));
      let res = await getDocs(q);

      posts.value = res.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
    } catch (err) {
      error.value = err.message;
      console.error("Error Loading Posts: ", err);
    }
  };

  return { posts, error, load };
};

export default getPosts;
