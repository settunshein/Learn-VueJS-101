<template>
    <form @submit.prevent="submit()">
        <div>
            <label>Email</label>
            <input type="email" v-model="email" required>
        </div>

        <div>
            <label>Password</label>
            <input type="password" v-model="password" required>
            <p v-if="errorMsg"><font color="crisom"><small>{{errorMsg}}</small></font></p>
        </div>

        <div>
            <label>Roles</label>
            <select v-model="role">
                <option value="" disabled> - Select Role - </option>
                <option value="developer">Web Developer</option>
                <option value="designer">Web Designer</option>
            </select>
        </div>

        <div>
            <input type="checkbox" v-model="accept">
            <label>Accept Terms and Conditions</label>
        </div>

        <div>
            <label>Skills</label>
            <input type="text" @keyup.alt="addSkill" v-model="skill">
        </div>

        <div v-for="(skill, index) in skills" :key="index" class="skill-bx">
            <small>
                {{skill}}
                <span class="cross" @click="deleteSkill(skill)">&#x2716;</span>
            </small>
        </div>

        <div align="center">
            <button class="create-btn">Create Account</button>
        </div>
    </form>
</template>



<script>
export default {
    data() {
        return {
            email   : "",
            password: "",
            role    : "developer",
            accept  : true,
            skills  : [],
            skill   : "",
            errorMsg: "",
        }
    },

    methods: {
        addSkill(e) {
            if (e.key === ",") {
                this.skills.push( this.skill );
                this.skill = "";
            }
        },

        deleteSkill(skill) {
            this.skills = this.skills.filter(loopSkill => {
                return loopSkill != skill;
            })
        },

        submit() {
            if (this.password.length < 8) {
                this.errorMsg = "Password must be at least 8 characters!";
            }
            console.log('Form Submitted');
        }
    }
}
</script>



<style>
    form {
        max-width: 420px;
        margin: 0 auto;
        background: white;
        text-align: left;
        padding: 34px;
        border-radius: 10px;
    }

    label {
        color: #aaa;
        display: inline-block;
        margin: 24px 0 0;
        font-size: 0.735em;
        text-transform: uppercase;
        letter-spacing: .5px;
        font-weight: bold;
    }

    input,
    select {
        display: block;
        padding: 10px 0;
        width: 100%;
        box-sizing: border-box;
        border: none;
        border-bottom: 1px solid #ddd;
        color: #555;
        outline: none;
        letter-spacing: .5px;
        background: transparent;
    }

    input[type="checkbox"] {
        display: inline-block;
        width: 16px;
        margin: 0 10px 0 0;
        position: relative;
        top: 2px;
    }

    .skill-bx {
        margin-top: 8px;
        border-radius: 6px;
        padding: 14px;
        background-color: wheat;
    }

    .cross {
        cursor: pointer;
        color: red;

    }

    .create-btn {
        margin-top: 38px;
        background: royalblue;
        padding: 14px 18px;
        color: white;
        border-radius: 100px;
        border: none;
        cursor: pointer;
        font-weight: bold;
        font-size: 14px;
        letter-spacing: .5px;
    }
</style>
