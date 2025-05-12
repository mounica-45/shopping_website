<<<<<<< HEAD
<script setup>
import pay_sale from '../assets/images/pay_sale.png'
import pay_sale_hover from '../assets/images/pay_sale_img.png'
</script>

<template>
    <section class="content pay">
      <div class="content_banner">
        <img :src="pay_sale" alt="fashionBanner" class="content_image" />
        <p class="content_text">
          <!-- <span class="content_text_block_elem white_color">PAYDAY</span>
          <span class="content_text_block_elem">EXPLORE</span><br/> -->
         <img :src="pay_sale_hover" class="paysaleBanner" alt="pay_sale"/>
         <br/>
         <p class="paysaleBanner_text">Spend minimal $100 get 30% off
            <span class="content_text_block_elemm">voucher code for your next purchase</span></p>
        <p class="paysaleBanner_date">1 June - 10 June 2021<span  class="content_text_block_elemm">*Terms & Conditions apply</span></p>
        <RouterLink to="/signup" class="content_button">Shop Now</RouterLink>
        </p>
        <!-- <img :src="banner" alt="fashionBanner" class="content_image" /> -->
      </div>
    </section>
=======
<script setup>
import pay_sale from '../assets/images/pay_sale.png'
import pay_sale_hover from '../assets/images/pay_sale_img.png'
</script>

<template>
    <section class="content pay">
      <div class="content_banner pay_baner">
        <img :src="pay_sale" alt="fashionBanner" class="content_image" />
        <div class="content_text">
          <img :src="pay_sale_hover" class="paysaleBanner" alt="pay_sale" />
          <br/>
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
>>>>>>> fe49d65 (responsive for all screens)
</template>