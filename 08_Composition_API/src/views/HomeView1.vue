<template>
    <div class="home">
        <!--
        <div>
            <h1>Person One</h1>
            <p>{{personOne.name}} - {{personOne.age}}</p>
            <button @click="changeOne">Change One</button>
        </div>

        <div>
            <h1>Person Two</h1>
            <p>{{personTwo.name}} - {{personTwo.age}}</p>
            <button @click="changeTwo">Change Two</button>
        </div>
        -->

        <input type="text" v-model="search" style="margin-top: 18px; margin-bottom: 18px; padding: 12px; width: 320px;">
        <p>Search Name - {{search}}</p>

        <div v-for="name in filteredNames" :key="name">
            <p>{{ name }}</p>
        </div>
    </div>
</template>



<script>
// import { ref, reactive } from 'vue';
import { ref, computed } from 'vue';

export default {
    setup() {
        /*
        let personOne = ref({name: 'John Doe', age: 30});
        let changeOne = () => {
            personOne.value.name = 'John Smith';
        }

        let personTwo = reactive({name: 'Jane Doe', age: 30});
        let changeTwo = () => {
            personTwo.name = 'Jane Smith';
        }

        return {personOne, changeOne, personTwo, changeTwo}
        */

        let names  = ref(['John Doe', 'Jane Doe', 'John Smith', 'Jane Smith']);
        let search = ref('');

        let filteredNames = computed(() => {
            return names.value.filter(name => {
                return name.includes(search.value);
            })
        })

        return {names, search, filteredNames}
    }
}
</script>
