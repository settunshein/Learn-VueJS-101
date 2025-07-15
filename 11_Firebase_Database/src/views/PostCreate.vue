<template>
  <form @submit.prevent="addPost">
    <div class="form-group">
      <label>Post Title</label>
      <input type="text" required v-model="title">
    </div>

    <div class="form-group">
      <label>Post Body</label>
      <textarea required v-model="body"></textarea>
    </div>

    <div class="form-group">
      <label>Tag (Hit Enter to Add a Tag)</label>
      <input type="text" v-model="tag" @keydown.enter.prevent="handleKeyDown">

      <div v-for="tag in tags" :key="tag">
        {{ tag }}
      </div>
    </div>

    <button>Add Post</button>
  </form>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { db } from '../firebase/config'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'

export default {
  setup() {
    let title = ref('');
    let body  = ref('');
    let tag   = ref('');
    let tags  = ref([]);

    let router = useRouter(); // ဒီကောင်က this.$router
    console.log(router);

    let handleKeyDown = () => {
      if (!tags.value.includes(tag.value)) {
        tags.value.push(tag.value);
      }

      tag.value = "";
    }

    let addPost = async () => {
			let newPost = {
				title     : title.value,
				body      : body.value,
				tags      : tags.value,
				created_at: serverTimestamp()
			}

			/*
			ဒီရေးထုံးက Firebase SDK Version အသစ်မှာ အလုပ်မလုပ်တော့ဘူး။
			await db.collection('posts').add(newPost);
			*/

			await addDoc(collection(db, 'posts'), newPost);
			console.log('New Post Created Successfully!');

      // Redirect User to Home Page
      router.push('/');
    }

    return { title, body, tag, tags, handleKeyDown, addPost };
  }
}
</script>

<style>
  .form-group {
    margin-bottom: 24px;
  }

  label {
    display: block;
  }

  input,
  textarea {
    padding: 6px;
  }
</style>
