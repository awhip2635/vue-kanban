<template>
    <div class="login">
        <div v-if="!loggedIn">
            <button id="registering" @click="reg">Register</button>
            <button id="logging" @click="log">Login</button>
            <div v-if="registering">
                <form @submit.prevent="register">
                    <input type="text" class="form-group" v-model="name" placeholder="name">
                    <input type="email" class="form-group" v-model="email" placeholder="email">
                    <input type="password" class="form-group" v-model="password" placeholder="password">
                    <button type="submit" class="btn btn-default">Register</button>
                </form>
            </div>
            <div v-if="logging">
                <form @submit.prevent="login">
                    <input type="email" class="form-group" v-model="email" placeholder="email">
                    <input type="password" class="form-group" v-model="password" placeholder="password">
                    <button type="submit" class="btn btn-default">Login</button>
                </form>
            </div>
        </div>
        <div v-else>
            <button @click="logout" class="btn btn-default">Logout</button>
            <a :href="'/#/'+ userid + '/boards'"><button class="btn btn-default">My Boards</button></a>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'login',
        data() {
            return {
                name: '',
                email: '',
                password: ''
            }
        },
        methods: {
            login() {
                var obj = {
                    email: this.email,
                    password: this.password
                }
                this.$store.dispatch('login', obj)
                email = '';
                password = '';
            },
            logout() {
                this.$store.dispatch('logout')
            },
            register() {
                var obj = {
                    name: this.name,
                    email: this.email,
                    password: this.password
                }
                this.$store.dispatch('register', obj)
                name = '';
                email = '';
                password = '';
            },
            log() {
                this.$store.dispatch('log')
            },
            reg() {
                this.$store.dispatch('reg')
            }
        },
        computed: {
            loggedIn() {
                return this.$store.state.loggedIn
            },
            registering() {
                return this.$store.state.registering
            },
            logging() {
                return this.$store.state.logging
            },
            buttons() {
                if (this.$store.state.registering) {
                    document.getElementById("registering").style.display = hidden
                }
                if (logging == true) {
                    document.getElementById("logging").style.display = hidden
                }
            }
        }
    }

</script>

<style scoped>

</style>