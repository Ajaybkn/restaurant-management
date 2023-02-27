<template>
    <img  src="../assets/logo.png" alt="logo" class="img">
<div class="container">
    

    

    <div class="content">

        <div class="register">
            <h2 id="welcome">Register</h2>
            <input type="text" placeholder="Enter name" v-model="name">

            <input type="text" placeholder="Enter email" v-model="email">

            <input type="password" placeholder="Enter password" v-model="password">
            <br />
            <button id="btn" @click="signUp">Register</button>
            <br/>
            <p>Already have an account ? <router-link to="/login">Login</router-link> here</p>
            
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'SignUp',
    data() {
        return {
            name: '',
            email: '',
            password: ''
        }

    },
    methods: {
       async signUp() {
            let result=await axios.post("http://localhost:3000/user",{
               name:this.name,
               email:this.email,
               password:this.password 
            })
            if(result.status==201){
                
                localStorage.setItem('resto-info',JSON.stringify(result.data))
                // navigate to the home page after signup-->>
                this.$router.push({name:'Home'})
            }
            this.name='',
            this.email='',
            this.password=''
            // console.log(result);
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
    margin-top: 95px;

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
p{
    font-size: 15px;
}
</style>
