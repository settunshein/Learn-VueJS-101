<template>
    <div class="backdrop" @click.self="closeModal">
        <div class="modal"
        :class="{success:theme==='success', danger:theme==='danger'}">
            <!--
            <h3>{{header}}</h3>
            <p>{{content}}</p>
            -->
            <slot/>

            <slot name="links"/>
        </div>
    </div>
</template>

<script>
export default {
    props: [
        'header',
        'content',
        'theme'
    ],

    methods: {
        closeModal() {
            this.$emit("close");
        }
    }
}
</script>

<style scoped>
    .backdrop {
        position: fixed;
        top: 0;
        background: rgba(0, 0, 0, 0.35);
        width: 100%;
        height: 100%;
    }

    .modal {
        width: 400px;
        padding: 20px 20px 40px;
        margin: 100px auto;
        background-color: white;
        border-radius: 10px;
    }

    h3 {
        text-transform: uppercase;
    }

    h4 {
        margin-top: 0;
    }

    p {
        margin-bottom: 42px;
    }

    .success {
        background: seagreen;
        color: white;
    }

    .danger {
        background: orangered;
        color: white;
    }
</style>
