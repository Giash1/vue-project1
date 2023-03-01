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
  </div >
  <div class="persons">
  <h1 style="color: blue; text-align: center;">Owners of the company</h1>
  <section class="all-persons" >
<section class="persons-1">
<img src="../assets/giash.jpg" alt="" height="300px" width="300px">
<p style="text-align: center;">Giash</p>
<p><a href="#">Email:giash1@gmail.com</a></p>
<p><a href="#">Mobile: +4670000000</a></p>
</section>
<section class="persons-2">
<img src="../assets/Selli.jpg" alt="" height="300px" width="300px">
<p style="text-align: center;">Selli</p>
<p><a href="#">Email:selli1@gmail.com</a></p>
<p><a href="#">Mobile: +4670000001</a></p>
</section>
<section class="persons-3">
<img src="../assets/Daniel.png" alt="" height="300px" width="300px">
<p style="text-align: center;">Daniel</p>
<p><a href="#">Email:daniel1@gmail.com</a></p>
<p><a href="#">Mobile: +4670000002</a></p>

</section>

  </section>


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
@media screen and (min-width: 200px) {
  .about1 {
    color: black;
    font-size: 80px;
    font-weight: bolder;
    margin-top: 160px;
    margin-left: 20px;
    background-color: aquamarine;
  }
  p {
    font-size: 20px;
  }
 .all-persons{
    margin-top: 40px;
    display:flex;
    flex-direction: row;
    row-gap: 40px;
    margin-left: 20px;
    padding-left: 400px;
    padding-right: 400px;
     background-color: aqua;
     padding-top: 60px;
     align-items: center;
     justify-items: center;

 }
.persons-2{
padding-left: 40px;
}
.persons-3{
padding-left: 40px;
}
}
</style>
