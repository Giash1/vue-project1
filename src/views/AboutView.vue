<template>
  <div class="about1">
    <h2>BELS</h2>
    <p>
      {{ message1 }}
    </p>

    <p>
      {{ message2 }}
    </p>

    <p>
      {{ message3 }}
    </p>
  </div>
</template>
<script>
`import·{·RouterLink,·RouterView·}·from·"vue-router";`;
export default {
  name: "AboutView",
  data() {
    return {
      message1: "# A company with some expert persons",
      message2: " # A ................................",
      message3: " # A company with some expert persons",
    };
  },
};
</script>

<style scoped>
@media screen and (max-width: 992px) {
  .about1 {
    color: black;
    font-size: 80px;
    font-weight: bolder;
    margin-top: 160px;
    margin-left: 20px;
  }
  p {
    font-size: 20px;
  }
}
</style>
