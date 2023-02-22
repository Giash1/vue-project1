<template>
  <div class="Garments1">
    <h1>{{ title }}</h1>
    <p>{{ header }}</p>
  </div>
</template>

<script>
export default {
  name: "GarmentsProducts",
  props: ["title", "header"],
};
</script>

<style lang="scss" scoped>
.Garments1 {
  color: black;
  font-size: 30px;
  font-weight: bolder;
  margin-top: 160px;
  margin-left: 20px;
}
</style>
