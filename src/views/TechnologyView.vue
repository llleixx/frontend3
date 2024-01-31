<template>
  <div class="technology-container">
    <h1><span class="head-prefix">02</span> MEET YOUR technology</h1>
    <div class="technology-wrapper">
      <picture>
        <source class="technology-image" :srcset="getImageUrl('landscape')" type="image/jpg" media="(max-width: 699px)"/>
        <source class="technology-image" :srcset="getImageUrl('portrait')" type="image/jpg" media="(min-width: 700px)" />
        <img class="technology-image" :src="getImageUrl('portrait')" alt="technology picture" />
      </picture>
    </div>
    <ul class="technology-items">
      <li v-for="(technology, i) in data" :key="i" :class="{selected: i === nowIndex, 'technology-item': true}" @click="nowIndex=i">{{ i }}</li>
    </ul>
    <div class="technology-dsecription">
      <p class="technology-fixed">THE TERMINOLOGY...</p>
      <p class="technology-name">{{ data[nowIndex].name }}</p>
      <p class="technology-description">{{  data[nowIndex].description }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import store from '../store'

const data = store.data.technology
const nowIndex = ref(0)

function getImageUrl(suffix) {
  return store.getAssetUrl(".." + data[nowIndex.value].images[suffix])
}

</script>

<style lang="scss" scoped>
@import '../assets/styles/variables.scss';

.technology-container {
  background: url('../assets/technology/background-technology-mobile.jpg') top left / cover no-repeat;
  min-height: calc(100vh - 70px);
  color: white;
}

h1 {
  font-size: 20px;
  text-align: center;
  font-weight: normal;
  text-transform: uppercase;
  letter-spacing: 2px;
  padding-top: 20px;
}

.technology-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

.technology-image {
  width: 100vw;
  margin-top: 30px;
}

.head-prefix {
  color: grey;
  margin-right: 5px;
}

.technology-items {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  padding: 0 100px;
  margin-top: 30px;
}

.technology-item {
  display: block;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: transparent;
  border: 1px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
}

.technology-item.selected {
  background-color: white;
  color: $dark-black;
}

.technology-fixed {
  color: $soft-purple;
  text-align: center;
  margin-top: 40px;;
  text-transform: uppercase;
}

.technology-name {
  font-size: 24px;
  line-height: 1.8;
  color: white;
  text-transform: uppercase;
  text-align: center;
}

.technology-description {
  text-align: center;
  margin-top: 20px;
  padding-left: 40px;
  padding-right: 40px;
  line-height: 1.5;
  color: $soft-purple;
  padding-bottom: 70px;
}

</style>