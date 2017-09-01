<template>
    <div class="login">
        <div class="container-fluid">

            <div v-if="!loggedIn">
                <div class="row">
                    <div class="col-xs-offset-2  col-xs-3">
                        <form @submit.prevent="login">
                            <div class="form-group">
                                <input type="email" class="form-control" v-model="logEmail" placeholder="email">
                                <input type="password" class="form-control" v-model="logPassword" placeholder="password">
                                <button type="submit" class="btn btn-default">Login</button>
                            </div>
                        </form>
                    </div>
                    <div class="col-xs-2">
                        <div class="or">
                            <h2>Login or Register</h2>
                        </div>
                    </div>
                    <div class="col-xs-3">
                        <div class="text-center">
                            <form @submit.prevent="register">
                                <div class="form-group">
                                    <input type="text" class="form-control" v-model="name" placeholder="name">
                                    <input type="email" class="form-control" v-model="email" placeholder="email">
                                    <input type="password" class="form-control" v-model="password" placeholder="password">
                                    <button type="submit" class="btn btn-default">Register</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <!-- 
                    <div v-if="logging"> -->
                    <!-- </div> -->
                </div>
            </div>
            <div v-if="loggedIn">
                <div class="row">
                    <div class="col-xs-3">
                        <a class="boards" href="/#/userboards"><button class="btn btn-default boards">My Boards</button></a>
                    </div>
                    <div class="col-xs-offset-6 col-xs-3 col-sm-3 col-md-3 col-lg-3">
                        <button @click="logout" class="btn boards btn-default">Logout</button>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-12">
                        <h1 class="vue-kanban">Vue Kanban</h1>
                    </div>
                </div>
            </div>
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
                password: '',
                logEmail: '',
                logPassword: ''
            }
        },
        methods: {
            login() {
                var obj = {
                    email: this.logEmail,
                    password: this.logPassword
                }
                this.$store.dispatch('login', obj)
                // logEmail = '';
                // logPassword = '';
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
                // email = '';
                // password = '';
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
            // buttons() {
            //     if (this.$store.state.registering) {
            //         document.getElementById("registering").style.display = hidden
            //     }
            //     if (logging == true) {
            //         document.getElementById("logging").style.display = hidden
            //     }
            // }
        }
    }

</script>

<style scoped>
    .boards {
        color: white;
        background-color: transparent
    }

    .or {
        color: white;
        /* background-color: rgba(0, 0, 0, .8); */
        border-radius: 5px;
    }

    .vue-kanban {
        color: white;
        font-size: 18rem;
        font-family: 'Encode Sans Condensed', sans-serif;
    }
    /* .my-boards {
        position: fixed;
        bottom: 0;
        right: 400px;
    } */
    /* .me-boards {
        width: 800px; */
    /* } */

    .form-control {
        margin: 1rem 0 1rem 0;
    }

    .form-group {
        margin-top: 2rem;
        /* background-color: rgba(0, 0, 0, .8); */
        padding: 1rem;
        border-radius: 5px;
    }

    .login {
        background-color: rgba(0, 0, 0, .8);
        border-radius: 25px;
        margin: 0 10rem 0 10rem;
        padding-top: 3rem;
    }
</style>