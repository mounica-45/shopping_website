<script setup>
import mobile from '../assets/images/Mobile_app.png';
import playstore_icon from '../assets/images/playstore_icon.png'
</script>

<template>
  <section class="mobile_content">
      <div class="mobile_content_banner">
        <p class="mobile_content_text">
          <span class="mobile_content_text_block_elem">DOWNLOAD APP &</span>
          <span class="mobile_content_text_block_elem">GET THE VOUCHER!</span>
          <span class="mobile_content_text_inline_elem">Get 30% off for first transaction using</span>
          <p class="mobile_content_text_inline_elem">Rondovision mobile app for now.</p>
          <img :src="playstore_icon" alt="playstore_image" class="mobile_content_playstore_image" />
        </p>
        <img :src="mobile" alt="fashionBanner" class="mobile_content_image" />
      </div>
    </section>
</template>