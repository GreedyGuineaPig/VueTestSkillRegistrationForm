app.component('Display', {
    template:
        /*html*/
        `<div class="display">
            <register-form v-on:skillRegistered="addSkill"></register-form>
            <register-list v-bind:skills="this.skills"></register-list>
        </div>`,
    data(){
        return{
            skills: [
                {name: "sample", level: 1},
                {name: "test", level: 2}
            ]
        }
    },
    methods:{
        addSkill(skill){
            this.skills.push(skill)
        }
    }
})