<template>
  <div class="graments">
    <div class="router-link">
      <div>Return to: <router-link to="/catagories">Catagories</router-link></div>
      <div>
        Return to: <router-link to="/grossaries">Grossaries Products</router-link>
      </div>
    </div>
    <h1>{{ title }}</h1>
    <div class="Garments1">
      <div v-for="garment in garments" :key="garment.id" class="garment">
        <h2>
          {{ garment.title }} {{ "." }}
          {{ garment.price }}
        </h2>
        <img v-bind:src="garment.img" alt="" class="img" />
        <br />
        <router Link class="btn" @click="onClick" type="button" to="/mypage">Buy</router>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GarmentsProducts",
  data() {
    return {
      title: "Asian Garments Products",
      garments: [],
    };
  },
  methods: {
    onClick() {
      this.$router.push("/mypage");
    },
  },

  //   fetching data use mounted
  mounted() {
    // bring data from IP address,while you update the data,bring the new address every time
    fetch("http://localhost:3000/garments")
      // it will give respons
      .then((res) => res.json())
      // return it as a data
      .then((data) => (this.garments = data))
      // finding catch error
      .catch((err) => console.log(err.message));
  },
};
</script>

<style lang="scss" scoped>
body {
  width: 1000px;
  height: auto;
}
.Garments1 {
  color: black;
  font-size: 30px;
  font-weight: bolder;
  margin-top: 160px;
  margin-left: 20px;
  padding: 20px;
  display: grid;
  row-gap: 60px;

  text-align: center;
  grid-template-columns: 1fr 1fr 1fr;
  background-color: aqua;
  width: auto;

  .garment {
    column-gap: 10px;
    background-color: blanchedalmond;
  }

  img {
    height: 300px;
    width: 300px;
  }
}
h1 {
  margin-top: 120px;
  text-align: center;
}
</style>
