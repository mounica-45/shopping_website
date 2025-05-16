<script setup>
import hm from '../assets/images/h&m.png'
import obey from '../assets/images/obey.png'
import shopify from '../assets/images/shopify.png'
import lacoste from '../assets/images/lacoste.png'
import levis from '../assets/images/levis.png'
import amazon from '../assets/images/amazon.png'
const logos = [
  hm,
  obey,
  shopify,
 lacoste,
 levis,
 amazon
]
</script>

<template>
  <section class="logos_wrapper">
    <div class="logos_section">
      <img 
        v-for="(logo, index) in logos" 
        :key="index" 
        :src="logo" 
        alt="brand logo" 
        class="logos_section_img"
      />
    </div>
  </section>
</template>



  