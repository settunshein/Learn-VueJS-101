<template>
    <nav class="main-nav">
        <router-link :to="{name:'home'}">Projects</router-link>
        <router-link :to="{name:'add-project'}">Add Project</router-link>
    </nav>
</template>



<script>
export default {

}
</script>



<style>
    .main-nav {
        text-align: center;
        margin: 40px auto;
    }

    .main-nav a {
        display: inline-block;
        text-decoration: none;
        margin: 0 auto;
        color: #999;
        font-weight: 500;
        font-size: 16px;
    }

    .main-nav a:not(:last-of-type) {
        margin-right: 18px;
    }

    a.router-link-active {
        border-bottom: 2px solid #00ce89;
        padding-bottom: 4px;
    }
</style>
