<template>
  <h2><u>Post Details</u></h2>

  <div v-for="post in posts" :key="post.id">
    <SinglePost :post="post" />
  </div>
</template>

<script>
import SinglePost from './SinglePost.vue'

export default {
  components: { SinglePost },
  props: ['posts'],
}
</script>
