app.component('register-list', {
  props: {
    skills: {
      type: Array,
      required: true
    }
  },
  template:
  /*html*/
  `
  <div class="register-container">
    <table>
      <tr>
        <th></th>
        <th>ID</th>
        <th>スキル名</th>
        <th>Maxレベル</th>
      </tr>
      <tr v-for="(skill, index) in skills" :key="index">
        <button v-on:click="removeTheSkill(index)">X</button>
        <td>{{index + 1}}</td>
        <td>{{ skill.name}}</td>
        <td>{{skill.level}}</td>
    </table>
  </div>`,
  methods:{
    removeTheSkill(index){
      this.skills.splice(index, 1)
    }
  }
})