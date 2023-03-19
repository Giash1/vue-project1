<template>
  <div>
    <h2>BELS has two diifrent products catagories:</h2>
    <div v-for="catagory in catagories" :key="catagory.id" class="catagory">
      <!-- adding router link to evry id -->
      <!-- bring id from catagories parametre id -->
      <router-link
        :to="{ name: 'catagoryDetails', params: { id: catagory.id } }"
      >
        <h2>{{ catagory.title }}</h2>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      catagories: [
        { title: "Grossary Products", id: 1, details: "lorem.." },
        { title: "Garments Products", id: 2, details: "lorem.." },
      ],
    };
  },
};
</script>
