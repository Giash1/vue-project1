<template>
    <div>
        <div class="cart">


<button  @click="navigateTo('cart')">
  <p class="cartNumber">{{ cart.length }}</p>
<img
      src="/images/cart.png"
      alt=""
      style="width: 100px; height: 100px"
    /></button>
</div>
  <div class="Grossaries">

    <div class="router-link">
      <div>
      <button @click="navigateTo('grossaries') ">View Grossaries</button>
    <br>
        Return to: <router-link to="/garments">Garments Products</router-link>
      </div>
    </div>
    <h1>{{ title }}</h1>
    <h2 style="text-align: center; color:blue">Your cart</h2>
    <div class="Grossaries1" v-if="page==='cart'">

     <div v-for="(grossary,index) in cart" :key="index" class="garment">
        <h2>{{ grossary.title }} {{ "." }} {{ grossary.price }}</h2>
        <img v-bind:src="grossary.img" alt="" class="img" />
        <br />
        <button Link class="btn" @click="removeItem(index)" type="button"
          >Remove</button
        >
      </div>

    </div>
    <div class="Grossaries1" v-if="page==='grossaries'">
      <div v-for="grossary in grossaries" :key="grossary.id" class="garment">
        <h2>{{ grossary.title }} {{ "." }} {{ grossary.price }}</h2>
        <img v-bind:src="grossary.img" alt="" class="img" />
        <br />
        <button Link class="btn" @click="addItem(grossary)" type="button"
          >Add to cart</button
        >
      </div>
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
    removeItem(index){
        this.cart.splice(index,1);
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
.cart{
    position: absolute;
    top:50;
    right: 0;
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

.cart{
    position: absolute;
    margin-top: 0px;
    margin-right: 0px;
    .cartNumber{
    color: crimson;
    font-size: 40px;
    height: 2px;
}
}
</style>
