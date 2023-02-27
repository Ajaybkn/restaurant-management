<template>
    <div class="container">
        <div class="header">
        <div class="img">
            <img src="../assets/logo-trans.png" alt="">

        </div>
        <div >
<nav class="links">

    <router-link to="/" class="nav">Home</router-link>
    <router-link to="/add-resto" class="nav">Add Restaurant</router-link>
    <router-link to="/" class="nav" @click="logout">Logout({{ userName }})</router-link>
</nav>
        </div>
            
            
        </div>
    </div>
</template>

<script>
    export default {
        name:'HeaderComp',
        methods:{
            logout(){
                localStorage.clear()
                this.$router.push({name:'Login'})
            }
        },
        props:{
            userName:String
        }
    }
</script>

<style  scoped>
.header{
    background-color: darkslategrey;
    display: flex;
    height: 60px;
    justify-content: center;
    
    padding: 10px;
    font-size: 20px;
    align-items: center;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: 400;

}
.container{
   width: 100vw;
     margin-top: -22px;
    margin-left: -8px; 
   

}
img{
    height: 130px;
    position: absolute;
    left: -25px;
    top: -35px;
}
.links{
    margin: 10px;
    color: #000;
}
.nav{
    margin: 10px;
    color: black;
    padding: 5px 15px;
    background-color:  gray;
    cursor: pointer;
    border-radius: 15px;
  box-shadow: 0 5px #999;
  text-decoration: none;
}
.nav:hover{
    background-color: greenyellow;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}
.nav:active{
    background-color: white;
}
</style>