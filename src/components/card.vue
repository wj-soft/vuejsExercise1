<template>
  <div class="card" style="width: 20rem;" >
    <div>
      <img src="https://picsum.photos/768" alt="Card example image">

      <div class="card-body">
        <h4 class="card-title">{{ itemInfo.title }}</h4>
        <p class="card-text">{{ itemInfo.description }}</p>
        <button v-on:click="removeItem(itemInfo.id)">Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  props: ['itemInfo'],
  methods: {
    removeItem: function(id){
      const URI = `http://localhost:3000/admin/item/${id}`;
      axios.delete(URI)
        .then(function(response){console.log(response)})
        .catch(function(err){console.log(err)})
      location.reload();
    }
  }
}
</script>

<style>
 .card {
   padding: 20px;
   margin: 15px;
 }
 
</style>