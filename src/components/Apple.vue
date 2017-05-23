<template>
  <div>
    <h1>{{msg}}</h1>
    <!--router test-->
    <p>{{$route.params.color}}{{$route.params.type}}</p>
    <button @click="getParam">get Param</button>
  
    <!--vuex.store-->
    <button @click="addOne">add</button>
    <button @click="minusOne">minus</button>
  
    <!--children view-->
    <!--<router-view></router-view>-->
  </div>
</template>

<script>
export default {
  name: 'apple',
  data() {
    return {
      msg: 'I am an apple',
      price: 5
    }
  },
  methods: {
    getParam() {
      console.log(this.$route.params)
    },
    addOne() {
      this.$store.dispatch('increasePrice', this.price)
    },
    minusOne() {
      this.$store.commit('decrement', this.price)
    }
  }
}
</script>