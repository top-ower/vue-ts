<template>
  <div>
    author: {{ author }}
    name: {{ name }}
  </div>
</template>
<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator'
  import { Getter, Mutation } from 'vuex-class'
  
  @Component
  export default class Index extends Vue {
    //Getter
    @Getter username;   // 账号用户名

    //Mutation
    @Mutation SET_USER;
    //data
    name: string = '';

    mounted(){
      // console.log(this.username); 

      this.setUsername('帅锅');
    }

    setUsername(name) {
      this.name = name
      this.SET_USER(name);
    }
  }
</script>