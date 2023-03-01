<template>
  <h1>Catagories Details</h1>
  <p>The catagory id is {{ id }}</p>
  <div>
  <p>Return back to: <router-link to="/catagories">Catagories</router-link></p>

  </div>

</template>

<script>
export default {
  props: ["id"],
  // data() {
  //   return {
  //     id: this.$route.params.id
  //   }
  // }
};
</script>

<style lang="scoped"></style>
