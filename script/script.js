const { createApp } = Vue ;

createApp({
    data() {
        return{
            logoImage: "img/pngwing.com.png",
            error: false,
            newTask:"",
            tasks: [
                { text: 'Fare i compiti', done: false }, 
                { text: 'Fare la spesa', done: true }, 
                { text: 'Fare il bucato', done: false }
                ]
        }
    },
    methods: 
    {
        addTask(){
            if (this.newTask.length < 5) {
                error = true;
            }else {
                this.tasks.unshift({ text: this.newTask, done: false })
            }

        }
    },
    mounted() {            
    },

    
}).mount("#app") 

