<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
// import { Getter, Mutation } from 'vuex-class'
import { getModule } from 'vuex-module-decorators';
import User from 'services/store/modules/user';

@Component
export default class HelloWorld extends Vue {
  //data
  msg: string = 'hello word!';

  mounted() {
    this.updateLanguage('en-US');
  }

  updateLanguage(lang) {
    const user = getModule(User, this.$store);
    user.setLanguage(lang).then((v: string) => {
      console.log(v);
      console.log(user.getLanguage);
      console.log(this.$store.getters['User/getLanguage']);
    })
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
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