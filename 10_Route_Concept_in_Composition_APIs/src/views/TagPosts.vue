<template>
  <div v-if="posts.length">
    <PostList :posts="filteredPosts"></PostList>
    <TagCloud :posts="posts"></TagCloud>
  </div>
</template>

<script>
import TagCloud from '../components/TagCloud'
import PostList from '../components/PostList'
import { computed } from 'vue';
import getPosts from '../composables/getPosts'

export default {
  components: {
    TagCloud, PostList
  },
  props: ['tag'],
  setup(props) {
    let {posts, error, load} = getPosts();
    load();

    let filteredPosts = computed(() => {
      return posts.value.filter((post) => {
        return post.tags.includes(props.tag)
      })
    })

    return { posts, error, filteredPosts };
  }
}
</script>

<style>

</style>
