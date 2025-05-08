<script setup>
import Hoodies from '../assets/images/Hoodies.png'
import Coats from '../assets/images/coats&perks.png'
import Tees from '../assets/images/tees.png'

const posters = [
  {
    image: Hoodies,
    title: 'Hoodies & Sweetshirt',
    subtext: 'Explore Now!'
  },
  {
    image: Coats,
    title: 'Coats & Parkas',
    subtext: 'Explore Now!'
  },
  {
    image: Tees,
    title: 'Tees & T-Shirt',
    subtext: 'Explore Now!'
  }
]
</script>

<template>
  <div class="poster">
    <h3 class="poster_text">NEW ARRIVALS</h3>
    <div class="poster_img">
      <div 
        class="poster_card" 
        v-for="(item, index) in posters" 
        :key="index"
      >
        <img :src="item.image" alt="poster image" />

        <div class="poster_info">
          <div class="poster_text_group">
            <h4 class="poster_title favourite_text">{{ item.title }}</h4>
            <p class="poster_subtext">{{ item.subtext }}</p>
          </div>
          <span class="arrow_icon">&#8594;</span>
        </div>

      </div>
    </div>
  </div>
</template>
