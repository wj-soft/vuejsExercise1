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
            <input type="file"  ref="photofile" name="photo" id="pt" @change="fileUpload($event)">
            <label for="paperInputs1"></label>
            <input type="text" placeholder="Title" id="title" v-model="title">
            <textarea placeholder="Description" id="description" v-model="description"></textarea>
          </form>
          <label for="modal-1" v-on:click="addItem()">Submit</label>
        </div>
      </div>
    </header>
    <div class="content">
      <div class="content-item">
        <card v-for="(item, index) in itemList" :key='index' v-bind:itemInfo="itemList[index]" v-on:removeItem="removeItem"></card>
      </div>
    </div>
    <!-- <div class="content">
      <add></add>
    </div> -->

    
  </div>

</template>

<script>
import card from './components/card'
import axios from 'axios'

export default {
  data () {
    return {
      pt: '',
      title: '',
      description: '',
      itemList: [],
    
    }
  },
  components : {
    'card' : card
  },
  methods: {
    getItems: function () {
      const URI = 'http://localhost:3000/admin/items';
      axios.get(URI).then((response) => {
        this.itemList = response.data.reverse();
      })
    },
    addItem: function (event) {
      const URI = 'http://localhost:3000/admin/item';
      const fileData = new FormData()
      const title = this.title
      const description = this.description

      // ref로 참조
      const file = this.$refs.photofile.files[0]
      //or  @change
      const file2 = this.pt
      fileData.append("photo", file)
      console.log(fileData.has('photo'))

      this.itemList.push({fileData, title, description})
      axios.post(URI, {fileData, title, description})
        .then(function(response){console.log(response)})
        .catch(function(err){console.log(err)})
      alert("등록이 완료되었습니다.")
    },
    removeItem: function (id) {
      this.itemList = this.getItems()
      const URI = `http://localhost:3000/admin/item/${id}`;
      
      axios.delete(URI)
        .then(function(response){console.log(response)})
        .catch(function(err){console.log(err)})

    },
    fileUpload: function (event) {
      this.pt = event.target.files[0];
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
