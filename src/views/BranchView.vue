<template>
  <div class="branch">
    <section class="branch-1">
      <section class="heading">
        <h2>BELS has two diifrent products catagory:</h2>
      </section>
      <section class="branches">
        <router-link to="/GrossaryShop" class="router">
          <!-- Bringing props from Garments products -->
          <GrossaryShop heading="Asian Grossary Products" class="router-1" />
        </router-link>
        <br>
        <router-link to="/GarmentsProducts" class="router">
          <!-- Bringing props from Garments products -->
          <GarmentsProducts title="Asian Garments Products" class="router-2" />
        </router-link>
      </section>

      <section class="details">
        <h2>{{ details }}</h2>
        <p># Our company give you the best products with money back garranty</p>
        <p># You will get the good services as well</p>
        <p># You have opportunity to make a complain as well</p>
      </section>
    </section>
  </div>
</template>
<script>
import GrossaryShop from "../components/GrossaryShop.vue";
import GarmentsProducts from "../components/GarmentsProducts.vue";
export default {
  name: "BranchView",
  components: { GrossaryShop, GarmentsProducts },
  data() {
    return {
      details: "More about our products:",
    };
  },
};
</script>

<style lang="scss" scoped>
.branch {

    margin: 10px 70px 0px 70px;
    height: 680px;
    width: 82%;

  .branch-1 {
    align-items: center;
    text-align: center;
    background-color: aqua;
    display: flex;
    flex-direction: column;
    height: 800px;
    padding-right: 20px;
  }
  .heading {
    font-weight: bold;
    color: rgb(15, 81, 195);
    font-size: 40px;
    margin-top: 40px;
  }
.branches{
    display: flex;
    flex-direction: row;
    gap: 30px;
    margin-top: -80px;
}

.details{
    p{
        font-size: 20px;
        font-weight: bold;
        line-break: 20px;
    }
    h2{
        margin-top: 40px;
    }
}

}
</style>
