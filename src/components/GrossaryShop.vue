<template>
  <div class="Grossary1">
    <h1>{{ heading }}</h1>
    <!-- sending this props to the branch as well-->
  </div>
</template>
<script>
export default {
  name: "GrossaryShop",
  props: ["heading"],
};
</script>
<style scoped>
.Grossary1 {
  color: black;
  font-size: 30px;
  font-weight: bolder;
  margin-top: 160px;
  margin-left: 20px;
}
</style>
