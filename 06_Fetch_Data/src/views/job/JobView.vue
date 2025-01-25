<template>
    <h2 style="margin-bottom: 42px;">
        <font color="crimson">JOBS PAGE</font>
    </h2>

    <div v-for="job in jobs" :key="job.id">
        <router-link
        :to="{   name: 'job-details', params: {id: job.id}   }">
            <h3>{{job.title}}</h3>
        </router-link>
    </div>
</template>

<script>
export default {
    data() {
        return {
            jobs: []
        }
    },

    mounted() {
        fetch('http://localhost:3000/jobs')
            // .then((res) => {
            //     console.log(res);
            //     return res.json()
            // })

            // .then((data) => {
            //     this.jobs = data;
            // })

            .then( res => res.json() )
            .then((data) => { this.jobs = data })

            .catch((err) => {
                console.log(err.message());
            })
    }
}
</script>

<style>

</style>
