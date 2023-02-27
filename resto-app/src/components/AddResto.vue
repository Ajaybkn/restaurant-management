<template>
<HeaderComp />
<div class="container">

    <div class="register">

        <h1>

            Add you Restaurant
        </h1>

        <form action="">
            <input type="text" placeholder="Restaurant's Name" name="name" v-model="name" />
            <input type="text" placeholder="Restaurant's Address" name="name" v-model="address" />

            <input type="number" placeholder="Restaurant's Contact" name="name" v-model="contact" />
            <button @click.prevent="addRestaurant">Add Restaurant</button>
        </form>
    </div>
</div>
</template>

<script>
import axios from 'axios';
import HeaderComp from './HeaderComp.vue';
export default {
    name: "AddResto",
    components: {
        HeaderComp
    },
    data() {
        return {
            name: '',
            address: '',
            contact: ''
        }
    },
    methods: {
        async addRestaurant() {
            let result = await axios.post("http://localhost:3000/restaurant", {
                name: this.name,
                address: this.address,
                contact: this.contact
            })
            // console.log(result);
            if(result.status==201 ){
                alert('successfull')
                this.$router.push({name:'Home'})
            }
            this.name='',
            this.address='',
            this.contact=''
        }
    }

};
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
