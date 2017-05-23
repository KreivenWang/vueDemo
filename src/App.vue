<template>
  <div id="app">
    <img src="./assets/logo.png">
  
    <h4 v-my-css="{'color':'red','font-weight':'bold'}">Customize Directive Test~</h4>
    <input type="text" v-my-focus>

    <!--mode 进出顺序 in-out out-in-->
    <transition name="fade" mode="out-in">
      <!--<keep-alive>-->
      <router-view></router-view>
      <!--</keep-alive>-->
    </transition>
  
    <!--路由-->
    <div class="demo-border">
      <router-link :to="{path:'apple'}" tag="li">to apple</router-link>
      <router-link :to="{path:'banana'}">to banana</router-link>
      <router-link :to="{path:'apple/red'}">to red apple</router-link>
    </div>
  
    <!--动画效果2 组件切换-->
    <div class="demo-border">
      <button v-on:click="toggleCom">toggleCom</button>
      <!--效果等同于 current-view标签-->
      <transition name="my-trans">
        <div :is="currentView"></div>
      </transition>
    </div>
  
    <!--动画效果1 显示切换-->
    <div class="demo-border">
      <button v-on:click="show = !show">toggleShow</button>
      <transition name="my-trans">
        <!--display:none-->
        <!--<p v-show="show">i am here(v-show)</p>-->
        <!--delete element-->
        <p v-if="show">i am here(v-if)</p>
      </transition>
      <transition name="fade" mode="out-in">
        <p v-if="show">i am here(v-if)</p>
        <div v-else>false show(v-else)</div>
      </transition>
    </div>
  
  </div>
</template>

<script>
import comA from './components/a';
import comB from './components/b';
export default {
  name: 'app',
  components: {
    comA, comB
  },
  data() {
    return {
      show: true,
      currentView: 'com-b'
    }
  },
  methods: {
    toggleCom() {
      let v = this.currentView;
      if (v === 'com-a') {
        this.currentView = 'com-b'
      } else {
        this.currentView = 'com-a'
      }
    }
  },
  directives: {
    myCss: {
      inserted(el, binding) {
        console.log('inserted');
        console.log(el, binding);
        let styleObj = binding.value;
        let arr = []
        for (let key in styleObj) {
          arr.push(key + ':' + styleObj[key])
        };
        arr = arr.join(';');
        el.style.cssText = arr;
      },
      bind(el, binding) {
        console.log('bind');
        console.log(el, binding);
      }
    },
    myFocus: {
      inserted(el, binding) {
        el.focus();
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s ease-in-out;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

.my-trans-enter-active,
.my-trans-leave-active {
  transition: all .2s ease-in-out;
}

.my-trans-enter {
  transform: translateY(-50px);
  opacity: 0;
}

.my-trans-leave-active {
  transform: translateY(20px);
  opacity: 0;
}

.demo-border {
  border: 1px dashed green;
  margin: 5px;
}
</style>
