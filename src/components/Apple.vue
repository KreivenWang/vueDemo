<template>
  <div>
    <h1>{{msg}}</h1>
    <p>{{$route.params.color}}{{$route.params.type}}</p>
    <button @click="getParam">get Param</button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'apple',
  data() {
    return {
      msg: 'I am an apple'
    }
  },
  methods: {
    getParam() {
      console.log(this.$route.params)
    }
  }
}
</script>