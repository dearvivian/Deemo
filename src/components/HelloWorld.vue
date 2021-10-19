<template>
  <div class="hello">
    <h1>{{ intro }}</h1>
   
   
   <!-- 这里router-link to="newcontact"会把路由导航到http://localhost:8080/#/newcontact   -->
    <router-link to="newcontact"><h1>{{ 'TO NewContact' }}</h1></router-link>

    <h2>Essential Links</h2>
    
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      intro: 'intro'
    }
  }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
