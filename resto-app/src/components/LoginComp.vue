<template>
<div>
    <div class="logo">

        <img src="../assets/logo.png" alt="logo" class="img">
    </div>
    <div class="content">

        <div class="register">
            <h2 id="welcome">Login</h2>

            <input type="text" placeholder="Enter email" v-model="email">

            <input type="password" placeholder="Enter password" v-model="password">
            <br />
            <button id="btn" @click="login">Login</button>
            <br />
            <p>Not have an account ? <router-link to="/sign-up">Register</router-link> here</p>

        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'LoginComp',
    data() {
        return {

            email: '',
            password: ''
        }

    },
    methods:{
       async login(){
        let result=await axios.get(` http://localhost:3000/user?email=${this.email}&password=${this.password}`);
        // console.log(result);
        if(result.status==200 && result.data.length>0){
                
                localStorage.setItem('resto-info',JSON.stringify(result.data[0]))
                // navigate to the home page after succesfull login-->>
                this.$router.push({name:'Home'})
            }

        }
    },
    mounted(){
        let user= localStorage.getItem('resto-info')
        if(user){
            this.$router.push({name:'Home'})
        }

        
    }
}
</script>

<style scoped>


.logo {
    display: flex;
    height: 100px;
    justify-content: center;

}
.img{
    position: absolute;
    left: 20px;
}
.container {
    background-color: whitesmoke;
    height: 100vh;
}

.content {

    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-right: 100px;
}

.register {
    padding-top: 37px;
    text-align: center;
    font-size: 30px;
    border: 2px solid blue;
    background-color: lightpink;
    height: 250px;
    width: 300px;

}

#welcome {
    margin-top: -10px;

    font-size: 30px;
    border: 1px solid red;
    background-color: lightgreen;
}

input {

    margin-top: 10px;
    width: 250px;
    height: 25px;
    border: 1px solid red;
    text-align: center;
}

#btn {
    height: 25px;
    width: 100px;
    background-color: lightblue;
}

p {
    font-size: 15px;
}
</style>
