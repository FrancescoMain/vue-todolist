const { createApp } = Vue ;

createApp({
    data() {
        return{
            loaded:false,
            logoImage: "img/pngwing.com.png",
            error: false,
            newTask:"",
            tasks: [
                { text: 'Fare i compiti', done: false }, 
                { text: 'Fare la spesa', done: true }, 
                { text: 'Fare il bucato', done: false }
                ],
            unDoneText :"Fatto",
            doneText :"Da Fare"
        }
    },
    methods: 
    {
        addTask(){
            if (this.newTask.length < 5) {
                this.error = true;
            }else {
                this.tasks.unshift({ text: this.newTask, done: false })
                this.error = false;
                this.newTask = "";
            }

        },
        deleteTask(index){
            this.tasks.splice(index, 1);
        },
        done(index){
            if (this.tasks[index].done) {
                this.tasks[index].done = false
            } else  {
                this.tasks[index].done = true;
            }

        }
    },
    mounted() { 

        this.loaded = true;           
    },

        
}).mount("#app") 

