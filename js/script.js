let { createApp } = Vue;

createApp({
    data() {
        return {
            emails:[],
        }
    },
    methods:{
        generateEmail(){
            this.emails = [];
            
            for(let i = 0; i<10; i++){
                axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then( (email) =>{
                    //console.log(email.data.response);
                    this.emails.push(email.data.response);
                })
            }
        },
    }
}).mount('#app');