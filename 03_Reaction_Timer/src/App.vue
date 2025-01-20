<template>
    <h2>How Fast Can You Catch Me?</h2>
    <button @click="start" :disabled="isPlaying">Play</button>

    <div v-if="isPlaying">
        <Block :delay="delay" @endGame="endGame"/>
    </div>

    <div v-if="showScore">
        <Result :score="score"/>
    </div>
</template>



<script>
import BlockComponent from './components/BlockComponent.vue';
import ResultComponent from './components/ResultComponent.vue';

export default {
    name: 'App',

    data() {
        return {
            isPlaying: false,
            delay: null,
            score: 0,
            showScore: false,
        }
    },

    methods: {
        start() {
            this.isPlaying = true;
            this.delay     = 2000 + Math.random() * 5000;
        },

        endGame(score) {
            this.score = score;
            this.isPlaying = false;
            this.showScore = true;
        }
    },

    components: {
        Block: BlockComponent,
        Result: ResultComponent
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
    margin-top: 60px;
}

button {
    padding: 12px 32px;
    border-radius: 100px;
    border: 1px solid #ddd;
    background: #ddd;
    cursor: pointer;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 1px;
}

button:active {
    background-color: #dddddd95;
}
</style>
