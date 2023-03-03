<template>
  <!-- using router link -->
  <!-- <li> a href = "home"</li> -->
  <!-- <RouterLink to ="/"> Home</RouterLink> -->
  <!-- <RouterLink to ="/about"> About</RouterLink> -->

  <nav class="navbar bg-body-tertiary fixed-top" style="margin-left: 20px">
    <div class="container-fluid">
      <RouterLink class="navbar-brand" to="/" style="margin-left: -15px"
        >Brothers Enterprise Limited Sweden AB</RouterLink
      >
      <div style="display: flex; flex-direction: column">
        <router-link to="/search">
          <p>
            <img
              src="../../public/images/search-client.png"
              alt=""
              style="width: 100px; height: 100px"
            />
          </p>

          <p
            style="
              margin-top: -52px;
              margin-left: 25px;
              color: black;
              font-size: 12px;
            "
          >
            Search
          </p>
        </router-link>
      </div>
    </div>

    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasNavbar"
      aria-controls="offcanvasNavbar"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div
      class="offcanvas offcanvas-end"
      tabindex="-1"
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
    >
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">BELS AB</h5>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <RouterLink class="nav-link active" aria-current="page" to="/"
              >Home</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/about">About</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/catagories"
              >Catagories
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/garments">Garments </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/grossaries"
              >Grossaries
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/contact">Contact</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/member">Log in</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/register">Register</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/mypage">My Page</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/search">Search</RouterLink>
          </li>
        </ul>
      </div>
    </div>
    <!-- </div> -->
  </nav>
  <RouterView />
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
.offcanvas-title {
  color: black;
}
nav {
  position: relative;
}
.navbar-brand {
  color: rgb(37, 42, 174);
  font-weight: bold;
  font-size: 40px;
  margin-top: 30px;
}
.navbar-toggler {
  background-color: rgb(50, 155, 21);
}
.nav-link {
  color: black;
}
</style>
