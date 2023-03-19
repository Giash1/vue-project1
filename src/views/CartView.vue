<template>
    <div>



        
     <div v-for="grossary in cart" :key="grossary.id" class="garment">
        <h2>{{ grossary.title }} {{ "." }} {{ grossary.price }}</h2>
        <img v-bind:src="grossary.img" alt="" class="img" />
        <br />
        <button Link class="btn" @click="removeItem(grossary)" type="button"
          >Remove</button
        >
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
    cart:[],
    //   page:"cart",
      page:"grossaries",
    };
  },
  methods: {
    addItem(grossary) {
        this.cart.push(grossary)
    //   this.$router.push("/cart");
    },
    navigateTo(page){
        this.page=page;
    },
    removeItem(grossaries){
        this.cart.splice(this.cart.indexOf(grossaries));
    }
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
