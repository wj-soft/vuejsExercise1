<template>
  <div class-="wrap">
    <header>
      <h1>My Gallery</h1>
      <button class="btn-block">ADD</button>
    </header>
    <div class="content">
      <div class="content-item"><card></card></div>
      <div class="content-item"><card></card></div>
      <div class="content-item"><card></card></div>
      <div class="content-item"><card></card></div>
    </div>
    <!-- <div class="content">
      <add></add>
    </div> -->

    
  </div>

</template>

<script>
import card from './components/card'
import add from './components/add'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components : {
    'card' : card,
    'add' : add
  }
}
</script>

<style>
 h1{
   text-align: center;
 }
 .btn-block {
   margin: 0 10px;
   color: red;
 }
 .content{
  display: flex;
  flex-wrap: wrap;
  justify-content: center; 
 }
 .content-item{
   padding: 20px;
 }

</style>
