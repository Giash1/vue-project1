<template>
  <div class="home-view">
    <div class="home">
      <h1>Welcome to the BELS AB</h1>
      <router-link to="/branch">
        <button>Check our products</button>
      </router-link>
    </div>
    <h2>scroll down</h2>
    <a href="#scroll-down">
      <img class="down" src="/images/down.svg" alt="" />
    </a>
    <div class="middle">
      <article class="products">
        <div>
          <div class="images rice" alt="" />
          <h2>Products Sample1</h2>
          <p>We are selling rice, oil and so on......</p>
        </div>
      </article>
      <article class="products">
        <div>
          <div class="images fish" alt="" />
          <h2>Products Sample2</h2>
          <p>We are selling fastfoods and so on......</p>
        </div>
      </article>
      <article class="products">
        <div>
          <div class="images meat" alt="" />
          <h2>Products Sample3</h2>
          <p>We are selling rentil and so on......</p>
        </div>
      </article>
    </div>
    <h1>Our Goal</h1>
    <hr class="solid" />
    <div class="bottom-main" id="scroll-down">
      <article class="mission-1">
        <img src="/images/vision.new.jpg" alt="" />
        <h3>Vision</h3>
        <p>Everyone can find their choosen products.</p>
      </article>
      <article class="mission-2">
        <img src="/images/mission.new.jpg" alt="" />
        <h3>Mission</h3>
        <p>We will open sevarel branches in the Stockholm area.</p>
      </article>
      <article class="mission-3">
        <img src="/images/values.new.jpg" alt="" />
        <h3>Values</h3>
        <p>You will get the refresh products with good quality</p>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
};
</script>

<style lang="scss" scoped>
.home {
  // width: 1440px;
  padding-top: 9rem;
  width: 100%;
  height: 800px;
  background-image: url(/images/supermarket.jpg);
  background-position: center;
  background-size: cover;

  h1 {
    margin: auto;
    width: 100%;
    text-align: center;
    font-size: 2rem;
    color: rgb(70, 8, 8);
    border: none;
  }
  a {
    text-decoration: none;
  }
  button {
    width: 300px;
    height: 80px;
    margin: 26rem auto;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    font-weight: 800;
    border-radius: 50px;
    border: 2px solid #fff;
    background: none;
    color: white;
  }
}
.down {
  margin-left: 350px;
}
h2 {
  width: 200px;
  margin: 0 auto;
  padding: 1rem;
  text-align: center;
  font-size: 2rem;
}
.middle {
  width: 100%;
  display: flex;
  flex-flow: row;
  justify-content: space-evenly;
  padding: 2rem 0;
}
.products {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border-radius: 5px;
  width: 400px;
  height: 500px;
  box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%);

  > div:first-child {
    background-color: #474e5d;
    width: 400px;
    height: 500px;
    border-radius: 5px;
    color: white;

    .images {
      width: 300px;
      height: 250px;
      margin: 3rem auto 1rem auto;
      background-repeat: no-repeat;
      background-size: cover;
      border-radius: 5px;
    }

    .rice {
      background-image: url("/images/pro.1.jpg");
      background-position: center top;
    }
    .fish {
      background-image: url("/images/pro.2.jpg");
      background-position: center top;
    }
    .meat {
      background-image: url("/images/pro.3.jpg");
      background-position: center bottom;
    }
  }
}
h1 {
  width: 240px;
  margin-top: 5rem;
  padding: 3rem;
  text-align: center;
  margin: auto;
  border-radius: 50px;
  border: solid rgb(233, 216, 233);
  font-size: 70px;
}
hr.solid {
  border-top: 3px solid #bbb;
}
.bottom-main {
  width: 100%;
  display: flex;
  flex-flow: row;
  justify-content: space-evenly;
  padding: 5rem 0;
}
.mission-1,
.mission-2,
.mission-3 {
  width: 300px;
  height: 300px;
  border-radius: 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%);
  color: white;
  img {
    width: 80px;
    height: 90px;
  }
  h3 {
    font-size: 2 rem;
    margin: 0;
  }
  p {
    width: 200px;
    text-align: center;
    margin: 0;
    font-size: 20px;
  }
}
.mission-1 {
  background-color: #1edb1e;
}
.mission-2 {
  background-color: #1a24ea;
}
.mission-3 {
  background-color: #ab1616;
}
</style>
