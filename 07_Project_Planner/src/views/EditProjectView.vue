<template>
    <h2 align="center">Edit Project</h2>
    <form @submit.prevent="updateProject">
        <label>Project Title</label>
        <input type="text" v-model="title">

        <label>Project Details</label>
        <textarea v-model="details"></textarea>

        <button>Update Project</button>
    </form>
</template>



<script>
export default {
    props: [ 'id' ],

    data() {
        return {
            "title"  : "",
            "details": "",
        }
    },

    methods: {
        updateProject() {
            let updateTaskRoute = 'http://localhost:3000/projects/' + this.id;

            fetch(updateTaskRoute, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(
                    {
                        title  : this.title,
                        details: this.details,
                    }
                )
            })
            .then(() => {
                this.$router.push({name: 'home'})
            })
        }
    },

    mounted() {
        fetch('http://localhost:3000/projects/'+this.id)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            this.title   = data.title;
            this.details = data.details;
        })
    }
}
</script>
