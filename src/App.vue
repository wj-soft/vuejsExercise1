<template>
  <div class-="wrap">
    <header>
      <h1>My Gallery</h1>
      <div class="row flex-spaces child-borders">
        <label class="paper-btn btn-block" for="modal-1">ADD</label>
      </div>
      <input class="modal-state" id="modal-1" type="checkbox">
      <div class="modal">
        <label class="modal-bg" for="modal-1"></label>
        <div class="modal-body">
          <form action="" method="post" enctype="multipart/form-data">
            <input type="file" id="pt">
            <label for="paperInputs1"></label>
            <input type="text" placeholder="Title" id="title">
            <textarea placeholder="Description" id="description"></textarea>
          </form>
          <label for="modal-1" v-on:click="addItem">Submit</label>
        </div>
      </div>
    </header>
    <div class="content">
      <div class="content-item">
        <card v-for="(item, index) in itemList" :key='index' v-bind:itemInfo="itemList[index]"></card>
      </div>
    </div>
    <!-- <div class="content">
      <add></add>
    </div> -->

    
  </div>

</template>

<script>
import card from './components/card'
import add from './components/add'
import axios from 'axios'

export default {
  name: 'app',
  data () {
    return {
      itemList: []
    }
  },
  components : {
    'card' : card,
    'add' : add
  },
  methods: {
    getItems: function () {
      // using JSONPlaceholder
      const URI = 'http://localhost:3000/admin/items';
      axios.get(URI).then((response) => {
        this.itemList = response.data;
      console.log(this.itemList)
      })
    },
    addItem: function () {
      const URI = 'http://localhost:3000/admin/item';
      const pt = document.getElementById('pt').value
      const title = document.getElementById('title').value
      const description = document.getElementById('description').value
      axios.post(URI, {pt, title, description})
        .then(function(response){console.log(response)})
        .catch(function(err){console.log(err)})
      alert("등록이 완료되었습니다.")
      this.getItems()
    }
  },
  created : function(){
    this.getItems()
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
   text-align: center;
 }
  .content{
  display: flex;
  flex-wrap: wrap;
  justify-content: center; 
 }
</style>
