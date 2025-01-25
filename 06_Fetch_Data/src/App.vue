<template>
    <nav>
        <router-link :to="{name: 'home'}">HOME</router-link>&emsp;&ensp;
        <router-link :to="{name: 'about'}">ABOUT</router-link>&emsp;&ensp;
        <router-link :to="{name: 'jobs'}">JOBS</router-link>
    </nav>

    <!--
    ဒီ <router-view/> လေးက component တွေကို swap ပေးတဲ့အလုပ်ကိုလုပ်ပေးသွားပါလိမ့်မယ်။
    -->
    <router-view/>

    <div class="btn-group">
        <button @click="goBack">Go Back</button>
        <button @click="redirect">Redirect to Home</button>
        <button @click="goForward">Go Forward</button>
    </div>
</template>



<script>
    export default {
        methods: {
            goBack() {
                this.$router.go(-1);
            },

            goForward() {
                this.$router.go(1);
            },

            redirect() {
                this.$router.push( {name: 'home'} )
            }
        }
    }
</script>



<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

nav {
    padding: 30px;
}

nav a {
    /* font-weight: bold; */
    font-size: 14px;
    color: #2c3e50;
    border: 1.5px solid #42b983;
    padding: 12px;
    border-radius: 8px;
    text-decoration: none;
    color: #42b983;
}

nav a.router-link-exact-active {
    background-color: #42b983;
    color: #F4F4F4;
}

.btn-group {
    display: flex;
    justify-content: space-between;
    width: 420px;
    margin: 42px auto;
}

.btn-group button {
    padding: 14px 0;
    border-radius: 100px;
    border: none;
    cursor: pointer;
    color: #F4F4F4;
    width: 120px;
    font-weight: bold;
    letter-spacing: .5px;
}

.btn-group button:nth-of-type(1) {
    background: tomato;
}

.btn-group button:nth-of-type(2) {
    background: cornflowerblue;
    width: 150px;
}

.btn-group button:nth-of-type(3) {
    background: mediumseagreen;
}
</style>
