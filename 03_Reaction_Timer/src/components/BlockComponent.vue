<template>
    <div
        class="block"
        v-if="showBlock"
        @click="stopTimer"
    >
        Click Here {{delay}}
    </div>
</template>

<script>
export default {
    props: [ 'delay' ],

    data() {
        return {
            showBlock: false,
            score: 0,
            timer: null,
        }
    },

    methods: {
        startTimer() {
            this.timer = setInterval(() => {
                this.score += 50;
            }, 50)
        },

        stopTimer() {
            clearInterval(this.timer);
            this.$emit('endGame', this.score);
        }
    },

    mounted() {
        setTimeout(() => {
            this.showBlock = true
            this.startTimer();
        }, this.delay)
    },

    updated() {
        console.log('Data Updated');
    }
}
</script>

<style>
    .block {
        background: darkturquoise;
        width: 500px;
        height: 250px;
        margin: 20px auto;
        padding-top: 30px;
        border-radius: 10px;
        cursor: pointer;
    }
</style>
