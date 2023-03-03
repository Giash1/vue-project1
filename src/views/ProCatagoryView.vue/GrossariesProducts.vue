<template>
  <div class="Grossaries1">
    <div class="router-link">
      <div>Return to: <router-link to="/catagories">Catagories</router-link></div>
      <div>Return to: <router-link to="/garments">Garments Products</router-link></div>
    </div>
    <h1>{{ title }}</h1>
    <div v-for="grossary in grossaries" :key="grossary.id" class="garment">
      <h2>{{ grossary.title }} {{ "." }} {{ grossary.price }}</h2>
      <img v-bind:src="grossary.img" alt="" class="img" />
      <br />
      <router Link class="btn" @click="onClick" type="button" to="/mypage">Buy</router>
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
.Grossaries1 {
  color: black;
  font-size: 30px;
  font-weight: bolder;
  margin-top: 160px;
  margin-left: 20px;
}
</style>
