<template>
    <h2 style="margin-bottom: 42px;">
        <font color="crimson">JOB DETAILS PAGE / {{$route.params.id}}</font>
    </h2>
    <div v-if="job">
        <h1>ID: {{id}}</h1>
        <h3>Job Title: {{job.title}}</h3>
        <h3>Job Details: {{job.details}}</h3>
    </div>
</template>



<script>
export default {
    props: [
        'id'
    ],

    data() {
        return {
            job: null,
        }
    },

    mounted() {
        fetch('http://localhost:3000/jobs/' + this.id)
            .then((res) => {
                return res.json()
            })

            .then((data) => {
                this.job = data;
                console.log(this.job);
            })

            .catch((err) => {
                console.log('Fetch Error: ', err.message);
            })
    }
}
</script>



<style>

</style>
