<template>
  <h2><u>Tag Cloud</u></h2>
  <div v-for="tag in uniqueTags" :key="tag">
    <router-link :to="{name: 'tag-posts', params: {tag}}">{{ tag }}</router-link>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  props: ['posts'],
  setup(props) {
    let tags = ref([]);

    props.posts.forEach((post) => {
      post.tags.forEach((tag) => {
        tags.value.push(tag);
      })
    })

    let uniqueTags = tags.value.filter((tag, idx, array) => {
      return array.indexOf(tag) === idx;
    })

    return { uniqueTags }
  }
}
</script>
