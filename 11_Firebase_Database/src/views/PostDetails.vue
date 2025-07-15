<template>
  <h2><u>Post Details</u></h2>

  <div v-if="post">
    <h3>{{post.title}}</h3>
    <p>{{post.body}}</p>
    <button @click="deletePost">Delete</button>
  </div>

  <div v-else>
    <Spinner></Spinner>
  </div>
</template>

<script>
import Spinner from '../components/Spinner'
import getPost from '../composables/getPost'
import { useRoute } from 'vue-router'
import { useRouter } from 'vue-router'
import { db } from '../firebase/config'
import { doc, deleteDoc } from 'firebase/firestore'

export default {
  components: { Spinner },
  props: ['id'],

  setup(props) {
    let route  = useRoute();
    let router = useRouter();
    console.log(route.params.id);

    // let {post, error, load} = getPost(props.id);
    let {post, error, load} = getPost(route.params.id);
    load();

    /*
    ဒီရေးထုံးက Firebase SDK Version အသစ်မှာ အလုပ်မလုပ်တော့ဘူး။
    let deletePost = async() => {
      await db.collection('posts').doc(id).delete();
      router.push('/');
    }
    */
    let deletePost = async() => {
      try {
        const docRef = doc(db, 'posts', props.id);

        await deleteDoc(docRef);
        console.log("Post Deleted Successfully!");

        // Redirect User to Home Page
        router.push('/');

      } catch (err) {
        console.error("Error Deleting Post: ", err);
      }
    }

    return { post, error, deletePost }
  }
}
</script>
