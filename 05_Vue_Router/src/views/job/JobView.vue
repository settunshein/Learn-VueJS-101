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
            jobs: [
                {id: "1", title: "Goal Keeper", detail: "Keeper Sweeper"},
                {id: "2", title: "Defender",    detail: "Left Winger"},
                {id: "3", title: "Midfielder",  detail: "Box to Box"},
            ]
        }
    }
}
</script>

<style>

</style>
