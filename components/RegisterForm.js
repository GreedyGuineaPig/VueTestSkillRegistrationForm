app.component('register-form', {
  template:
  /*html*/
  `<form class="register-form" @submit.prevent="onSubmit">
    <label for="name">スキル名:</label>
    <input id="name" v-model="name" >
    <label for="level">最大レベル:</label>      
    <select id="level" v-model.number="level">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
      <option>6</option>
      <option>7</option>
    </select>

    <input class="button" type="submit" value="登録">  
    
  </form>`,
  data() {
    return {
      name: '',
      level: '',
      registers: [{name: "sample", level: 1}, {name: "test", level: 2}]
    }
  },
  methods: {
    onSubmit() {
      if (this.name === '' || this.level === '') {
        alert('Please fill out every field.')
        return
      }

      let skillSet = {
        name: this.name,
        level: this.level,
      }
      this.$emit('skillRegistered', skillSet)

      this.name = ''
      this.level = ''
    }
  }
})