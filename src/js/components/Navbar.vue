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
                  {{ $t('home') }}
              </router-link>
          </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {{ $t('work') }}
                </a>
                <ul class="dropdown-menu dropdown-menu-end custom-navbar-bg">
                    <router-link
                        to="/work/web-development"
                        class="dropdown-item"
                        exact-active-class="router-link-exact-active"
                        active-class="router-link-active"
                    >
                        {{ $t('webDevelopment') }}
                    </router-link>
                    <router-link
                        to="/work/game-development"
                        class="dropdown-item"
                        active-class="router-link-active"
                        exact-active-class="router-link-exact-active"
                    >
                        {{ $t('gameDevelopment') }}
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
                {{ $t('about') }}
            </router-link>
          </li>
<!--            Flag - Localization -->
            <li class="nav-item d-flex align-items-center">
                <button @click="toggleLanguage" class="btn btn-link p-0 mx-2 d-flex align-items-center justify-content-center" :title="$t('switchLanguage')">
                    <component :is="currentFlag" alt="Change Language" class="flag-icon"/>
                </button>
            </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import hungaryFlag from "./svg/flags/hungary.vue";
import englishFlag from "./svg/flags/english.vue";

export default {
    data() {
        return {
            flags: {
                hu: hungaryFlag,
                en: englishFlag
            }
        }
    },
    computed: {
        currentFlag() {
            return this.$i18n.locale === 'hu' ? this.flags.en : this.flags.hu;
        }
    },
    methods: {
        toggleLanguage() {
            const newLang = this.$i18n.locale === 'hu' ? 'en' : 'hu';
            this.$i18n.locale = newLang;
            this.$i18n.global.locale = newLang;
            localStorage.setItem('language', newLang);
        }
    },
    mounted() {
        const savedLang = localStorage.getItem('language');
        if (savedLang) {
            this.$i18n.locale = savedLang;
            this.$i18n.global.locale = savedLang;
        }
    }
}
</script>

<style scoped>

</style>