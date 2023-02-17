<template>
  <div class="container">
    <div class="container1">
      <article class="sub-container1">
        <img
          class="img1"
          src="../assets/logo-supermarket.new.jpg"
          alt="super-market"
        />
        <p>{{ message }}</p>
      </article>
      <div class="sub-container2">
        <section>
          <h3><router-link to="/about">About us</router-link></h3>
        </section>
        <section>
          <h3><router-link to="/contact">Contact us</router-link></h3>
        </section>

        <section>
          <h3>Join with us</h3>
          <div class="social">
            <router-link to="/socialMedia">
              <button
                style="
                  font-size: 24px 24px;
                  border-radius: 50%;
                  width: 140px;
                  height: 80px;
                "
              >
                <img
                  src="../assets/facebook.png"
                  alt="facebook"
                  style="width: 20px; height: 20px"
                />
                Facebook
              </button>
            </router-link>
            <router-link to="/SocialMedia"
              ><button
                style="
                  font-size: 24px;
                  border-radius: 50%;
                  width: 140px;
                  height: 80px;
                "
              >
                <img
                  src="../assets/twitter.png"
                  alt=""
                  style="width: 20px; height: 20px"
                />
                Twitter
              </button></router-link
            >
            <router-link to="/SocialMedia"
              ><button
                style="
                  font-size: 24px 24px;
                  border-radius: 50%;
                  width: 140px;
                  height: 80px;
                "
              >
                <img
                  src="../assets/Instragram.jpg"
                  alt=""
                  style="width: 20px; height: 20px"
                />Instagram
              </button></router-link
            >
            <router-link to="/SocialMedia"
              ><button
                style="
                  font-size: 24px 24px;
                  border-radius: 50%;
                  width: 140px;
                  height: 80px;
                "
              >
                <img
                  src="../assets/whatsapp.png"
                  alt=""
                  style="width: 20px; height: 20px"
                />Whatsapp
              </button></router-link
            >
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
`import·{·RouterLink,·RouterView·}·from·"vue-router";`;
export default {
  name: "FooterView",
  data() {
    return {
      message: "Best products, good service and low price",
    };
  },
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.container {
  height: 21rem;
  transform: translateY(210px);
  padding-right: 10px;
  padding-left: 10px;
  margin-left: 60px;
  background-color: blueviolet;
  position: relative;
  border: solid red;

  .container1 {
    display: flex;
    justify-content: space-between;

    height: 9.25rem;
    margin-top: 2.25rem;
    .sub-container1 {
      .img1 {
        height: 200px;
        width: 20rem;
        padding-top: 10px;
        border-radius: 20%;
      }
      p {
        font-size: 20px;
      }
    }
  }
  .social {
    display: flex;
    flex-direction: row;
    gap: 20px;
  }
}
</style>
