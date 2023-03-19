<template>
  <h1>Catagories Details</h1>
  <p>The catagory id is {{ id }}</p>
  <div>
    <p>
      Return back to: <router-link to="/catagories">Catagories</router-link>
    </p>
  </div>
  <GrossariesProducts />
  <GarmentsProducts />
</template>

<script>
import GrossariesProducts from "./GrossariesProducts.vue";
import GarmentsProducts from "./GarmentsProducts.vue";

export default {
  props: ["id"],
  components: { GrossariesProducts, GarmentsProducts },
};
</script>

<style lang="scoped"></style>
