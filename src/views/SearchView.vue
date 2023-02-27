<template>
  <div class="search">
    <p>Return to the <router-link to="/">Home</router-link></p>

    <div class="search-container">
      <h1>You can search your product here:</h1>
      <div>
        <input type="text" placeholder="search" v-model="searching" />
      </div>

      <div v-for="(item, index) in itemsList" :key="index">
        <!-- to show the number write 1 that will start from 1 -->
        {{ index + 1 }}. {{ item.name }} {{ "=" }} {{ item.price }}
      </div>

      <div v-if!="itemsMissing" class="item-missing">{{ itemsMissing }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "SearchView",

  data() {
    return {
      searching: "",

      items: [
        { name: "Rice", price: "120kr" },
        { name: "Meet", price: "100kr" },
        { name: "Juice", price: "320kr" },
        { name: "Fruits", price: "420kr" },
        { name: "Fish", price: "150kr" },
        { name: "Vegetables", price: "130kr" },
        { name: "Snacks", price: "160kr" },
        { name: "Sweet", price: "180kr" },
        { name: "Cake", price: "120kr" },
        { name: "Biscuts", price: "190kr" },
        { name: "Flour", price: "110kr" },
      ],
    };
  },
  computed: {
    itemsList() {
      if (this.searching.trim().length > 0) {
        return this.items.filter((item) =>
          item.name.toLowerCase().includes(this.searching.trim().toLowerCase())
        );
      }
      return this.items;
    },
  },
//   methods: {
//     itemsMissing(){
//         if(!this.searching ===
//         this.itemsList.length){
//            alert("Item not found") ;
//         }



//     }
//   },
};
</script>
