<template>
    <p>Result is {{score}}ms</p>

    <div v-if="score < 250">
        <p>You're So Fast!</p>
    </div>

    <div v-else-if="score > 250 && score < 500">
        <p>You're Normal!</p>
    </div>

    <div v-else>
        <p>You're Too Slow! Try Again !!!</p>
    </div>
</template>

<script>
export default {
    props: [ 'score' ],
}
</script>

<style>

</style>
