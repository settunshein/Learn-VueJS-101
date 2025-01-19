<template>
    <div>
        <h1 ref="greeting">Hello VueJS</h1>
        <input type="text" ref="name">
        <button @click="clickHandler">Click</button>
        <!-- <button @click.alt="clickHandler">Click</button> -->
    </div>
    <!-- <ModalComponent header="Login Success" content="Welcome Back!" theme="success"/> -->
    <!-- <ModalComponent header="Confirm Delete" content="Are You Sure? Do You Want to Delete This?" theme="danger"/> -->

    <div v-if="showModal" class="modal-dialog">
        <!--
         <ModalComponent
            :header="header"
            :content="content"
            :theme="theme"
            @close="showModal=false"
        />
        -->
         <ModalComponent
            :header="header"
            :content="content"
            :theme="theme[0]"
            @close="showModal=false"
        >
            <h3>LOGIN SUCCESS</h3>
            <p>Welcome Back!</p>

            <template v-slot:links>
                <button class="btn" @click="showModal=false">Close</button>
            </template>
        </ModalComponent>
    </div>

    <div v-if="confirmModal" class="modal-dialog">
         <ModalComponent
            :header="header"
            :content="content"
            :theme="theme[1]"
            @close="confirmModal=false"
        >
            <h3>Are You Sure?</h3>
            <p>Do You Want to Delete This?</p>
            <button class="btn" @click="confirmModal=false">Confirm</button>
        </ModalComponent>
    </div>

    <div>
        <button @click="showModal=true">Open Modal</button>&nbsp;
        <button @click="confirmModal=true">Delete</button>
    </div>
</template>

<script>
import ModalComponent from './components/ModalComponent.vue'
export default {
    data() {
        return {
            header      : "Login Success",
            content     : "Welcome Back!",
            theme       : ['success', 'danger'],
            showModal   : false,
            confirmModal: false,
        }
    },

    methods: {
        clickHandler() {
            this.$refs.name.focus();
            this.$refs.greeting.textContent = 'Greeting!';
        }
    },

    components: {
        ModalComponent
    }
}
</script>

<style scoped>
    body {
        margin: 0;
        padding: 0;
    }

    div {
        margin-bottom: 24px;
    }

    h1 {
        color: royalblue;
    }

    .btn {
        margin-top: 10px;
        padding: 8px 22px;
        cursor: pointer;
        border: none;
        border-radius: 50px;
    }
</style>
