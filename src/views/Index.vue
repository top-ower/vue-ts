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
    @Getter author;//作者

    //Mutation
    @Mutation SET_AUTHOR;
    //data
    name: string = '';

    mounted(){
      console.log(this.author); 

      this.changeAuthor('帅锅');
    }

    changeAuthor(name) {
      this.name = name
      this.SET_AUTHOR(name);
    }
  }
</script>