<template>
  <div class="contact">
    <section class="contact-sub">
      <h1>CONTACT</h1>
      <p>
        <router-link to="/">Home</router-link>
      </p>
      <div>
        <hr />
      </div>
    </section>
    <section class="contact-1">
      <h3>Contact us</h3>
      <div class="container">
        <form action="" prevent>
          <h1>Your details</h1>
          <label for="fname">First Name</label>
          <!-- two ways data binding that will show the the input
field and result also shown in the out side as well using
required v-model=""-->
          <input
            type="text"
            id="fname"
            name="firstname"
            placeholder="Obligatory..."
            required
            v-model="firstName"
          />
          <label for="lname">Last Name</label>
          <input
            type="text"
            id="lname"
            name="ltname"
            placeholder="Obligatory..."
            required
            v-model="lastName"
          />

          <label for="email"> Email Address</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Obligatory..."
            required
            v-model="email"
          />
          <label for="phone"> Mobile Number</label>
          <input
            type="text"
            id="phone"
            name="phone"
            placeholder="Obligatory..."
            required
            v-model="mobileNumber"
          />
          <label for="address"> Address</label>
          <input
            type="text"
            id="address"
            name="address"
            placeholder="Obligatory..."
            required
            v-model="address"
          />

          <label for="region">Region</label>
          <select id="town" name="town" required v-model="region">
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
            required
            v-model="comment"
            style="height: 100px"
          ></textarea>
          <div class="checkbox-1">
            <label for="checkbox"> Accept the terms and conditions</label>
            <!-- required is used for mandatory -->
            <input type="checkbox" required v-model="termsConditions" />
          </div>
          <!-- adding button with a click event -->
        </form>
        <div class="display">
          <section>
            <h1 style="font-size: 40px; color: blue">Display</h1>
            <p>First Name : {{ firstName }}</p>
            <!-- adding multiple checkbox with same v-model -->
            <label for="checkbox"></label>
            <!-- value is adding optional -->
            <input type="checkbox" value="fname" v-model="check" />
            <p>Last Name : {{ lastName }}</p>
            <label for="checkbox"></label>
            <input type="checkbox" value="lname" v-model="check" />
            <p>Email Address : {{ email }}</p>
            <label for="checkbox"></label>
            <input type="checkbox" value="eml" v-model="check" />
            <p>Mobile Number : {{ mobileNumber }}</p>
            <label for="checkbox"></label>
            <input type="checkbox" value="mnbr" v-model="check" />
            <p>Address : {{ address }}</p>
            <label for="checkbox"></label>
            <input type="checkbox" value="adrs" v-model="check" />
            <p>Region : {{ region }}</p>
            <label for="checkbox"></label>
            <input type="checkbox" value="rgn" v-model="check" />
            <p>Comment : {{ comment }}</p>
            <label for="checkbox"></label>
            <input type="checkbox" value="cmnt" v-model="check" />
            <p>Terms and conditions : {{ termsConditions }}</p>
            <!-- if you want to check the value just add value
         to all the inputs and use another p with check  -->
            <p>Checked : {{ check }}</p>
          </section>
        </div>
        <br />
        <button @click="aboutClick">Submit</button>
      </div>
    </section>
  </div>
</template>

<script>
`import·{·RouterLink,·RouterView·}·from·"vue-router";`;
export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      mobileNumber: "",
      address: "",
      region: "",
      comment: "",
      termsConditions: false,
      //   termsConditions: true,
      // for multiple checkbox value should be array
      check: [],
    };
  },
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
  h1 {
    text-align: center;
    color: blue;
    font-size: 40px;
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
.display {
  h1 {
    text-align: center;
  }
  display: flexbox;
  margin-top: 30px;
  text-align: start;
  border: solid rgba(10, 10, 10, 0.556);
  background: #2091f9;
  border-radius: 12px;
  height: auto;
  padding-left: 20px;
}

.display:hover {
  background-color: #30db12;
}
</style>
