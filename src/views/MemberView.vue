<template>
  <div class="myside">
    <section class="myside-1">
      <h1 style="padding-left: 10px">Membership</h1>
      <section class="router-link">
        <p>
          <router-link to="/" class="router-link-1">Home</router-link>
        </p>
        <p>
          <router-link to="/member" class="router-link-1">Login</router-link>
        </p>
        <p>
          <router-link to="/register" class="router-link-1"
            >Register</router-link
          >
        </p>
      </section>

      <div>
        <hr />
      </div>
    </section>
    <section class="contact-1">
      <h3 style="text-align: center">To go to my Page</h3>
      <p style="font-size: 30px; text-align: center">
        Already have an account ? just log in
      </p>
      <div class="container">
        <form action="" prevent>
          <h1>Login</h1>

          <label for="email"> Email Address</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Obligatory..."
          />
          <label for="phone"> Password</label>
          <input
            type="text"
            id="phone"
            name="phone"
            placeholder="Obligatory..."
          />
        </form>
        <div class="checkbox-1">
          <label for="checkbox"> Accept the terms and conditions</label>
          <!-- required is used for mandatory -->
          <input type="checkbox" required v-model="termsConditions" />
        </div>
        <!-- <div class="display">
            <section>
              <h1 style="font-size: 40px; color: blue">Display</h1>
              <p>Email Address : {{ email }}</p>
              <label for="checkbox"></label>
              <input type="checkbox" value="eml" v-model="check" />
              <p>Password : {{ password }}</p>
              <label for="checkbox"></label>
              <input type="checkbox" value="mnbr" v-model="check" />
              <p>Terms and conditions : {{ termsConditions }}</p>

            <p>Checked : {{ check }}</p>
            </section>
          </div> -->
        <br />
        <div class="login-register">
          <router-link to="/mypage" @click="aboutClick" class="router-link-2">
            Login
          </router-link>

          <p style="font-size: 20px; padding-left: 20px">
            Don't have any account ?
          </p>
          <router-link to="/register" class="router-link-2"
            >Register</router-link
          >
        </div>
      </div>
    </section>
  </div>
</template>

<script>
`import·{·RouterLink,·RouterView·}·from·"vue-router";`;
export default {
  data() {
    return {};
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
  //   button {
  //     background-color: #2091f9;
  //     color: black;
  //     border: none;
  //     border-radius: 50px;
  //     padding: 12px;
  //     cursor: pointer;
  //   }
  //   button:hover {
  //     background-color: #30db12;
  //   }
}

.checkbox-1 {
  margin-top: 20px;
}
.login-register {
  display: flex;
  flex-direction: column;
  .router-link-2 {
    background-color: #2091f9;
    color: black;
    border: none;
    border-radius: 50px;
    padding: 12px;
    cursor: pointer;
    text-align: center;
    font-size: 20px;
    margin-top: 10px;
  }
  p {
    margin-top: 10px;
  }
}
</style>
