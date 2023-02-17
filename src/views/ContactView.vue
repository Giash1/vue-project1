<template>
  <div></div>
  <div class="contact">
    <section class="breadcrumbs">
      <h1>CONTACT</h1>
      <p>
        <router-link to="/"><span>Home</span></router-link>
        <img src="../assets/right.svg" alt="" />
        <span>Contact</span>
      </p>
      <div>
        <hr />
      </div>
    </section>
    <section class="contact-1">
      <h3>Contact us</h3>
      <div class="container">
        <form action="" prevent>
          <label for="fname">First Name</label>

          <input
            type="text"
            id="fname"
            name="firstname"
            placeholder="Obligatory..."
          />
          <label for="lname">Last Name</label>
          <input
            type="text"
            id="lname"
            name="ltname"
            placeholder="Obligatory..."
          />

          <label for="email"> Email</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Obligatory..."
          />
          <label for="phone"> Mobile Number</label>
          <input
            type="text"
            id="phone"
            name="phone"
            placeholder="Obligatory..."
          />
          <label for="address"> Address</label>
          <input
            type="text"
            id="address"
            name="address"
            placeholder="Obligatory..."
          />

          <label for="region">Region</label>
          <select id="town" name="town">
            <option value="Stockholm">Stockholm</option>
            <option value="Linköping">Linköping</option>
            <option value="Uppsala">Uppsala</option>
            <option value="Gävle">Gävle</option>
          </select>

          <label for="subject" ref="about">Comment</label>
          <textarea
            id="comment"
            name="comment"
            placeholder="If you have any comment.."
            style="height: 100px"
          ></textarea>
          <!-- adding button with a click event -->
          <button @click="aboutClick">Submit</button>
        </form>
      </div>
    </section>

    --
  </div>
</template>

<script>
`import·{·RouterLink,·RouterView·}·from·"vue-router";`;
export default {
  computed: {
    prod() {
      return this.$store.state.productList.slice(1, 7);
    },
  },
  methods: {
    aboutClick() {
      this.$ref.about.classList.add("active");
      this.$ref.about.focus();
    },
  },
};
</script>

<style lang="scss" scoped>
.contact-1 {
  h3 {
    padding: 3rem;
    font-size: 3rem;
    color: rgb(26, 30, 239);
  }
  .container {
    width: 400px;
    margin: auto;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    margin-top: 30px;
  }
  form {
    display: grid;
    row-gap: 10px;
  }
  label {
    display: flex;
    flex-direction: column;
    color: black;
    font-size: large;
    font-weight: 30px;
  }
  input[type="text"],
  select,
  textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #501ab2;
    border-radius: 10px;
    box-sizing: border-box;
    background-color: #21b6f5;
  }
  button {
    background-color: #2091f9;
    color: black;
    border: none;
    border-radius: 50px;
    padding: 12px;
    cursor: pointer;
  }
  button:hover {
    background-color: #30db12;
  }
}
</style>
