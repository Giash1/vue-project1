<template>
  <div class="Grossaries">
    <div class="router-link">
      <div>Return to: <router-link to="/catagories">Catagories</router-link></div>
      <div>Return to: <router-link to="/garments">Garments Products</router-link></div>
    </div>
    <h1>{{ title }}</h1>
    <div class="Grossaries1">
      <div v-for="grossary in grossaries" :key="grossary.id" class="garment">
        <h2>{{ grossary.title }} {{ "." }} {{ grossary.price }}</h2>
        <img v-bind:src="grossary.img" alt="" class="img" />
        <br />
        <router Link class="btn" @click="onClick" type="button" to="/mypage">Buy</router>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GrossariesProducts",
  data() {
    return {
      title: "Asian GrossariesProducts",
      grossaries: [],
    };
  },
  methods: {
    onClick() {
      this.$router.push("/mypage");
    },
  },
  mounted() {
    fetch("http://localhost:3000/grossaries")
      .then((res) => res.json())
      .then((data) => (this.grossaries = data))
      .catch((err) => console.log(err.message));
  },
};
</script>
<style lang="scss" scoped>
body {
  width: 1000px;
  height: auto;
}
.Grossaries1 {
  color: black;
  font-size: 30px;
  font-weight: bolder;
  margin-top: 160px;
  margin-left: 20px;
  padding: 20px;
  display: grid;
  gap: 30px;
  text-align: center;
  grid-template-columns: 1fr 1fr 1fr;
  background-color: aqua;
  width: auto;

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
