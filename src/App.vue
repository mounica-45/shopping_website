<script setup>
import logo from '@/assets/images/logo.png';
import banner from '@/assets/images/banner.png';
import Banner from './components/Banner.vue';
import Arrivals from './components/Arrivals.vue';
import Paysale from './components/Paysale.vue';
import Favourite from './components/Favourite.vue';
import Fashion from './components/Fashion.vue';
import Info from './components/Info.vue';
import Footer from './components/Footer.vue';
import Signup from './components/Signup.vue';

import { ref,watch } from 'vue';

const isNavOpen = ref(false);

const toggleNav = () => {
  isNavOpen.value = !isNavOpen.value;
};


const showSignupModal = ref(false)

function openSignupModal() {
  showSignupModal.value = true
}
watch(showSignupModal, (newVal) => {
  document.body.style.overflow = newVal ? 'hidden' : ''
})

</script>

<template>
  <div class="card">
    <header class="header" :class="{ 'open__nav': isNavOpen }">
    <div class="header__logo">
      <img :src="logo" alt="fashionLogo" class="logo_image" />
    </div>
    <!-- Hamburger menu icon on the right -->
    <div class="hamburger-menu" @click="toggleNav">
      <div></div>
      <div></div>
      <div></div>
    </div>
    <nav class="header__nav">
      <ul class="header__nav-list">
        <li class="header__nav-item"><RouterLink to="/">Catalogue</RouterLink></li>
        <li class="header__nav-item"><RouterLink to="/fashion">Fashion</RouterLink></li>
        <li class="header__nav-item"><RouterLink to="/favourite">Favourite</RouterLink></li>
        <li class="header__nav-item"><RouterLink to="/lifestyle">Lifestyle</RouterLink></li>
        <li class="header__nav-item">
          <a href="#" class="button-link" @click.prevent="openSignupModal">Signup</a>
        </li>
      </ul>
    </nav>
  </header>
    <Signup v-if="showSignupModal" @close="showSignupModal = false" />


    <section class="content">
      <div class="content_banner">
        <p class="content_text">
          <span class="content_text_block_elem white_color">LET’S</span>
          <span class="content_text_block_elem">EXPLORE</span>
          <span class="content_text_block_elem unique_color">UNIQUE</span>
          <span class="content_text_block_elem">CLOTHES.</span>
          <span class="content_text_inline_elem">Live for Influential and Innovative fashion!</span><br/>
          <a  href="#" class="content_button">Shop Now</a>
        </p>
        <img :src="banner" alt="fashionBanner" class="content_image" />
      </div>
    </section>
    <br/>
    <Banner />
    <br/>
    <Arrivals/>
    <br/>
    <Paysale/>
    <br/>
    <Favourite/>
    <br/>
    <Fashion/>
    <br/>
    <Info/>
    <Footer/>


  </div>
</template>
