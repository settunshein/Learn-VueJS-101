<template>
    <NavbarComponent></NavbarComponent>
    <router-view/>
</template>



<script>
    import NavbarComponent from './components/NavbarComponent.vue';
    export default {
        components: {
            NavbarComponent
        }
    }
</script>



<style>
#app {
    max-width: 600px;
    margin: 0 auto;
    color: #2c3e50;
    padding: 16px;
}
</style>
