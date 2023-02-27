<template>
    <HeaderComp />
    <div class="container">
    
        <div class="register">
    
            <h1>
    
                Update you Restaurant
            </h1>
    
            <form action="">
                <input type="text" placeholder="Restaurant's Name" name="name" v-model="restaurant.name" />
                <input type="text" placeholder="Restaurant's Address" name="name" v-model="restaurant.address" />
    
                <input type="text" placeholder="Restaurant's Contact" name="name" v-model="restaurant.contact" />
                <button @click.prevent="UpdateRestaurant">Update Restaurant</button>
            </form>
        </div>
    </div>
    </template>

<script>
import axios from 'axios'
import HeaderComp from './HeaderComp.vue';
    export default {
        name:'UpdateResto',
        components:{
            HeaderComp
        },
        data() {
        return {
            restaurant:{

                name: '',
                address: '',
                contact: ''
            }
        }
    },
   async mounted(){
        // console.log(this.$route.params.id)
        const result=await axios.get("http://localhost:3000/restaurant/"+this.$route.params.id)
        // console.log(result);
        this.restaurant=result.data
    },
    methods:{
       async UpdateRestaurant(){
        let result = await axios.put("http://localhost:3000/restaurant/"+this.$route.params.id, {
                name: this.restaurant.name,
                address: this.restaurant.address,
                contact: this.restaurant.contact
            })
            if(result.status==200 ){
               alert("succesfull")
                this.$router.push({name:'Home'})
            }
        }
    }
   
    }
</script>

<style scoped>
form {
    height: 82vh;
    width: 100vw;
    margin-top: -111px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

}

.register {
    margin-top: 10px;
    background-color: bisque;
}

h1 {
    text-align: center;
}

form input {
    height: 30px;
    width: 400px;
    margin: 10px;
}

form input:focus {
    background-color: lightslategray;
    color: black;
    font-size: 20px;
    font-weight: 600;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

.heading {
    text-align: center;
    background-color: darkgoldenrod;
}

button {
    height: 30px;
    width: 200px;
    margin: 10px;
}

button:hover {
    background-color: green;
    cursor: pointer;
}
</style>