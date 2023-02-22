<template>
  <div class="register">
    <section class="register-sub">
      <h1>Register</h1>
      <p>
        Already have an account? go to
        <br />
        <router-link to="/login">Login</router-link>
      </p>
      <p>
        <router-link to="/">Home</router-link>
      </p>
      <div>
        <!-- making a separation line -->
        <hr />
      </div>
    </section>

    <section class="contact-1">
      <div class="container">
        <h1>Register yourself</h1>
        <form @submit.prevent="handleSubmit">
          <label for="fname">First Name</label>

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

          <label for="password"> Password </label>
          <input
            type="text"
            id="password"
            name="password"
            placeholder="Obligatory..."
            required
            v-model="password"
          />
          <div v-if="passwordError" class="error">{{ passwordError }}</div>

          <label for="confirm-password"> Confirm Password</label>
          <input
            type="text"
            id="confirm-password"
            name="confirm-password"
            placeholder="Obligatory..."
            required
            v-model="confirmPassword"
          />
          <div v-if="unmatched" class="error">{{ unmatched }}</div>
          <label for="region">Region</label>
          <select id="town" name="town" required v-model="region">
            <option value="Stockholm">Stockholm</option>
            <option value="Linköping">Linköping</option>
            <option value="Uppsala">Uppsala</option>
            <option value="Gävle">Gävle</option>
          </select>
          <div class="checkbox-1">
            <label for="checkbox"> Accept the terms and conditions</label>
            <!-- required is used for mandatory -->
            <input type="checkbox" required v-model="termsConditions" />
          </div>

          <div class="login-register">
            <!-- <router-link to="/member" class="router-link-2">Register</router-link> -->
            <button @click="click">Creating account</button>
          </div>
          <!-- <router-link class="button" to="/member" @click="aboutClick"> Submit</router-link> -->
        </form>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      mobileNumber: "",
      address: "",
      password: "",
      confirmPassword: "",
      passwordError: null,
      unmatched: null,
      region: "",

      termsConditions: false,
      //   termsConditions: true,
      // for multiple checkbox value should be array
      check: [],
    };
  },

  methods: {
    handleSubmit() {
      // validate password
      this.passwordError =
        this.password.length > 5
          ? ""
          : "Password must be at least 6 characters long";

      // make request to database to save user
      console.log("email: ", this.email);
      console.log("password: ", this.password);

      if (this.confirmPassword === this.password) {
        alert("password matched");
      } else {
        alert("password not matched");
      }
    },
    click() {
      if (this.lebel) {
        this.$router.push("/register");
      } else {
        this.$router.push("/member");
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.router-link {
  display: flex;
  flex-direction: row;
  color: black;
  gap: 260px;
  padding-left: 10px;

  .router-link-1 {
    color: black;
    font-size: 20px;
  }
}

.contact-1 {
  .container {
    width: 400px;
    margin: auto;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    background-color: rgba(13, 94, 165, 0.895);
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
  select {
    width: 100%;
    padding: 10px;
    border: 1px solid #12985c;
    border-radius: 10px;
    box-sizing: border-box;
    background-color: #7c2ed5;
  }
  .error {
    color: red;
  }
  button {
    background-color: #2091f9;
    color: black;
    border: none;
    border-radius: 50px;
    padding: 12px;
    margin-left: 120px;
    cursor: pointer;
  }
  button:hover {
    background-color: #30db12;
  }
}
</style>
