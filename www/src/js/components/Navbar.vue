<template>
  <nav class="navbar navbar-expand-md border-bottom border-body custom-navbar-bg" data-bs-theme="dark">
    <div class="container-fluid">
      <button class="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav mx-2 ms-auto">
          <li class="nav-item">
              <router-link
                  to="/"
                  class="nav-link text-light"
                  exact-active-class="router-link-exact-active"
                  active-class="router-link-active"
              >
                  Home
              </router-link>
          </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Work
                </a>
                <ul class="dropdown-menu dropdown-menu-end custom-navbar-bg">
                    <router-link
                        to="/work/web-development"
                        class="dropdown-item"
                        exact-active-class="router-link-exact-active"
                        active-class="router-link-active"
                    >
                        Web Development
                    </router-link>
                    <router-link
                        to="/work/game-development"
                        class="dropdown-item"
                        active-class="router-link-active"
                        exact-active-class="router-link-exact-active"
                    >
                        Game Development
                    </router-link>
                </ul>
            </li>
          <li class="nav-item">
            <router-link
                to="/about"
                class="nav-link text-light"
                exact-active-class="router-link-exact-active"
                active-class="router-link-active"
            >
                About
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>

</script>

<style scoped>

</style>