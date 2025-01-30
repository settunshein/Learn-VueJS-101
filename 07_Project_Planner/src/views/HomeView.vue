<template>
    <div class="home">
        <FilterNav @filteredStatus="status=$event" :status="status"></FilterNav>
        <div v-for="project in filteredProjects" :key="project.id">
            <SingleProject :project="project" @delete="deleteProject" @complete="completeProject"></SingleProject>
        </div>
    </div>
</template>



<script>
import SingleProject from '../components/SingleProject'
import FilterNav from '../components/FilterNav.vue'

export default {
    name: 'HomeView',

    components: {
        SingleProject, FilterNav
    },

    data() {
        return {
            projects: [],
            status  : "all",
        }
    },

    methods: {
        deleteProject(id) {
            this.projects = this.projects.filter(project => {
                return project.id != id;
            });
        },

        completeProject(id) {
            let findProject = this.projects.find(project => {
                return project.id === id;
            });

            findProject.completed = !findProject.completed
        }
    },

    computed: {
        filteredProjects() {
            if (this.status === 'completed') {
                return this.projects.filter((project) => {
                    return project.completed
                });
            }

            if (this.status === 'ongoing') {
                return this.projects.filter((project) => {
                    return !project.completed
                });
            }

            return this.projects;
        }
    },

    mounted() {
        fetch('http://localhost:3000/projects')

        .then((res) => {
            return res.json()
        })

        .then((data) => {
            this.projects = data;
        })

        .catch((err) => {
            console.log(err);
        })
    }
}
</script>
