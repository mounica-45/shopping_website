<script setup>
import Trending from '../assets/images/Trend_on_insta.png'
import All_Budget from '../assets/images/All_under_budget.png'
const favourites=[
{
    image: Trending,
    title: 'Trending on instagram',
    subtext: 'Explore Now!'
  },
  {
    image: All_Budget,
    title: 'All Under $40',
    subtext: 'Explore Now!'
  },
]
</script>


<template>
    <div class="poster">
      <h3>Young’s Favourite</h3>
      <div class="poster_img favourite_img">
      <div 
        class="poster_card favourite_card" 
        v-for="(item, index) in favourites" 
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