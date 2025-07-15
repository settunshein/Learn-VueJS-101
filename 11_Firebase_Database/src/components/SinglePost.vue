<template>
  <div class="post">
    <router-link :to="{name: 'post-details', params: {id: post.id}}">
      <h3>{{post.title}}</h3>
    </router-link>

    <p>{{cutPostBody}}</p>

    <div v-for="tag in post.tags" :key="tag">
      <!-- <router-link :to="{name: 'tag-posts', params: {tag: tag}}">{{ tag }}</router-link> -->
      <router-link :to="{name: 'tag-posts', params: {tag}}">{{ tag }}</router-link>
    </div>
  </div>
  <hr>
</template>

<script>
import { computed } from 'vue'

export default {
	props: ['post'],

	setup(props) {
		let cutPostBody = computed(() => {
			return props.post.body.substring(0, 100);
		})

		console.log(props);
		return {cutPostBody}
	}
}
</script>
