



<template>
    <div>
        <div class="cart">


<button  @click="navigateTo('cart1')">
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
      <button @click="navigateTo('garments') ">View Garments</button>
    <br>
        Return to: <router-link to="/grossaries">Grossaries Products</router-link>
      </div>
    </div>
    <h1>{{ title }}</h1>
    <h2 style="text-align: center; color:blue">Your cart</h2>
    <div class="Grossaries1" v-if="page==='cart'">

     <div v-for="(garment,index) in cart" :key="index" class="garment">
        <h2>{{ garment.title }} {{ "." }} {{ garment.price }}</h2>
        <img v-bind:src="garment.img" alt="" class="img" />
        <br />
        <button Link class="btn" @click="remove(index)" type="button"
          >Remove</button
        >
      </div>

    </div>
    <div class="Grossaries1" v-if="page==='garments'">
      <div v-for="garment in garments" :key="garment.id" class="garment">
        <h2>{{ garment.title }} {{ "." }} {{ garment.price }}</h2>
        <img v-bind:src="garment.img" alt="" class="img" />
        <br />
        <button Link class="btn" @click="add(garment)" type="button"
          >Add to cart</button
        >
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "GarmentsProducts",
  data() {
    return {
      title: "Asian GarmentsProducts",
      garments: [],
      cart:[],
    //   page:"cart",
      page:"garments",
    };
  },
  methods: {
    add(garment) {
        this.cart.push(garment)
    //   this.$router.push("/cart");
    },
    navigateTo(page){
        this.page=page;
    },
    remove(index){
        this.cart.splice(index,1);
    }
  },
  mounted() {
    fetch("http://localhost:3000/garments")
      .then((res) => res.json())
      .then((data) => (this.garments = data))
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
