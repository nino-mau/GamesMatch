<script setup>
// *** Import page sections components ***
import MainNavbar from './components/MainNavbar.vue';
import LandingPageSection1 from './components/landing-page/LandingPageSection1.vue';
import LandingPageSection2 from './components/landing-page/LandingPageSection2.vue';
import LandingPageSection3 from './components/landing-page/LandingPageSection3.vue';
import LandingPageSection4 from './components/landing-page/LandingPageSection4.vue';
import LandingPageSection5 from './components/landing-page/LandingPageSection5.vue';
import MainFooter from './components/MainFooter.vue';
</script>

<template>
   <header class="site-header">
      <MainNavbar />
   </header>
   <main class="landing-page-main">
      <LandingPageSection1 />
      <LandingPageSection2 />
      <LandingPageSection3 />
      <LandingPageSection4 />
      <LandingPageSection5 />
   </main>
   <footer>
      <MainFooter />
   </footer>
</template>

<style scoped>
.site-header {
   overflow: auto;
   position: sticky; /* Make header and it's navbar follow the page while scrolled */
   top: 0;
   z-index: 1000;
}

/* --- Represent the main content of the landing page --- */
.landing-page-main {
   width: 100%;
}
</style>
