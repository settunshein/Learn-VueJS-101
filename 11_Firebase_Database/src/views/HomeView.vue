<template>
	<div class="home">
		<div v-if="error">
			<font style="color: crimson">{{ error }}</font>
		</div>

		<div v-if="posts.length > 0">
			<PostList :posts="posts"></PostList>
            <TagCloud :posts="posts"></TagCloud>
		</div>

		<div v-else>
			<Spinner></Spinner>
		</div>
	</div>
</template>

<script>
import TagCloud from '../components/TagCloud'
import Spinner from '../components/Spinner'
import PostList from '../components/PostList'
import getPosts from '../composables/getPosts'

export default {
	components: {
        Spinner, PostList, TagCloud
    },

	setup() {
		let {posts, error, load} = getPosts();

		load();

		return {posts, error};
	}
}
</script>
