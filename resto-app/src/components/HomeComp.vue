<template>
    <section v-if="restaurants.length>0">
        <table border="2" >
            <tr class="table_head">
                <td> S.no </td>
                <td>Name</td>
                <td>Address</td>
                <td>Contact</td>
                <td>Actions</td>
            </tr>
            <tr v-for="item in restaurants" :key="item.id" class="table-data">
                <td>{{ item.id }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.address }}</td>
                <td>{{ item.contact }}</td>
                <td><button class="btn-update"><router-link :to="'/update-restro/'+item.id">Update</router-link> </button> <button class="btn-dlt" @click="deleteRest(item.id)">Delete</button></td>
            </tr>
        </table>
    </section>
    <section v-else>
        <h1 class="no_data">No Entries found</h1>
    </section>
<div>
    <HeaderComp :userName="name" />
    <marquee behavior="" direction="">
    <h3 class="welcomeNote blink-bg">Hello {{ name }}, Welcome to the restaurant management portal. </h3>
</marquee>
</div>

</template>

<script>
import axios from 'axios';
import HeaderComp from './HeaderComp.vue';

export default {
    name: "HomeComp",
    data() {
        return {
            name: '',
            restaurants: []
        }
    },
    methods:{
       async dataLoader(){
            let user = localStorage.getItem('resto-info')
        this.name = JSON.parse(user).name
        if (!user) {
            this.$router.push({
                name: 'SignUp'
            })
        }
        let result = await axios.get("http://localhost:3000/restaurant")
        // console.log(result);
        this.restaurants = result.data
        },
        deleteRest(id){
            let result =  axios.delete("http://localhost:3000/restaurant/"+id)
            alert('Successfully deleted')
            location.reload()
            if(result.status==200){
               this.dataLoader()
               
            }
        }
    },
    components: {

        HeaderComp,
    },
     mounted() {
       this.dataLoader()
       
       

    }

}
</script>

<style  scoped>
.btn-dlt{
    background-color: red;
}
.btn-update{
    background-color: yellow;
    text-decoration: none;
}
table{
   
    color: black;
    background-color: bisque;
    height: 260px;
    width: 778px;
    text-align: center;
    margin-top: 100px;
    position: absolute;
    left: 169px;
    top: 27px;

}
.table_head{
    color: crimson;
    font-size: 20px;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
    text-decoration: underline;
}
.no_data{
    color: red;
    position: absolute;
    top: 150px;
    left: 400px;
    font-size: 50px;
}
.welcomeNote{
    border: 1px solid blue;
    width: 470px;
    
}
.blink-bg{
    color: #fff;
    padding: 10px;
    display: inline-block;
    border-radius: 5px;
    animation: blinkingBackground 2s infinite;
}
@keyframes blinkingBackground{
    0%		{ background-color: #10c018;}
    25%		{ background-color: #1056c0;}
    50%		{ background-color: #ef0a1a;}
    75%		{ background-color: #254878;}
    100%	        { background-color: #04a1d5;}
}

</style>
