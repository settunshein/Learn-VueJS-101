<template>
    <div class="project" :class="{completed: project.completed}">
        <div class="flexing">
            <h3 @click="showDetails=!showDetails">{{project.title}}</h3>
            <div class="icon-bx">
                <i class="bi bi-trash" @click="deleteProject"></i>

                <router-link :to="{ name: 'edit-project', params: {id:project.id} }">
                    <i class="bi bi-pencil"></i>
                </router-link>

                <i class="bi bi-check2-all" @click="completeProject"></i>
            </div>
        </div>

        <p v-if="showDetails">{{project.details}}</p>
    </div>
</template>



<script>
export default {
    props: [
        'project'
    ],

    data() {
        return {
            api: 'http://localhost:3000/projects/',
            showDetails: false,
        }
    },

    methods: {
        deleteProject() {
            let deleteRoute = this.api + this.project.id;
            console.log(deleteRoute);

            fetch(deleteRoute, {method: "DELETE"})
            .then(() => {
                this.$emit('delete', this.project.id)
            })
            .catch((err) => {
                console.log(err);
            })
        },

        completeProject() {
            let updateCompleteRoute = this.api + this.project.id;

            fetch(updateCompleteRoute, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(
                    {
                        completed: !this.project.completed
                    }
                )
            })
            .then(() => {
                this.$emit('complete', this.project.id)
            })
            .catch((err) => {
                console.log(err);
            })
        }
    }
}
</script>



<style>
    .project {
        padding: 20px 20px 20px 24px;
        background-color: #E5E5E5;
        cursor: pointer;
        margin: 20px;
        transition: .4s all;
        border-radius: 5px;
        border-left: 4px solid crimson;
    }

    .completed {
        border-left-color: mediumseagreen;
    }

    .project:hover {
        box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.15);
    }

    h3 {
        color: indigo;
        margin-top: 14px;
        margin-bottom: 14px;
        font-weight: 500;
    }

    P {
        margin-top: 14px;
        margin-bottom: 14px;
    }

    .flexing {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .icon-bx .bi {
        margin-left: 8px;
        font-size: 16px;
        padding: 8px 12px;
        border-radius: 6px;
        color: #FFF;
    }

    .icon-bx .bi:nth-of-type(1) {
        background: tomato;
    }

    .icon-bx .bi:nth-of-type(2) {
        background: mediumseagreen;
    }

    .icon-bx a .bi {
        background-color: goldenrod !important;
    }
</style>
