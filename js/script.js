import { todo } from "./data.js";

// console.log(todo);

const {createApp} = Vue;

createApp({
    data() {
        return {
            todo,
        };
    },
    methods:{

    },
    mounted(){

    }
}).mount('#app');