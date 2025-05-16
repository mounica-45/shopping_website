<script setup>
import pay_sale from '../assets/images/pay_sale.png'
import pay_sale_hover from '../assets/images/pay_sale_img.png'
</script>

<template>
    <section class="content pay">
      <div class="content_banner pay_baner">
        <!-- <img :src="pay_sale" alt="fashionBanner" class="content__image" /> -->
         <div class="image-with-stars">
          <img :src="pay_sale" alt="fashionBanner" class="content__image" />
          <span class="star top-left">★</span>
          <span class="star top-right">★</span>
          <span class="star bottom-left">★</span>
          <span class="star bottom-right">★</span>
        </div>
        <div class="content_text">
          <img :src="pay_sale_hover" class="paysaleBanner" alt="pay_sale" />
          <p class="paysaleBanner_text">
            Spend minimal $100 get 30% off
            <span class="content_text_block_elemm">voucher code for your next purchase</span>
          </p>
          <p class="paysaleBanner_date">
            1 June - 10 June 2021
            <span class="content_text_block_elemm">*Terms & Conditions apply</span>
          </p>
          <RouterLink to="/signup" class="content_button">Shop Now</RouterLink>
        </div>

        <!-- <img :src="banner" alt="fashionBanner" class="content_image" /> -->
      </div>
    </section>
</template>

