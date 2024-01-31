<template>
  <div class="crew-container">
    <h1><span class="head-prefix">02</span> MEET YOUR CREW</h1>
    <div class="crew-wrapper">
      <picture class="crew-image">
        <source :srcset="getImageUrl('webp')" type="image/webp" width="170px" />
        <img alt="crew" :src="getImageUrl('png')" width="170px" />
      </picture>
    </div>
    <ul class="crew-items">
      <li v-for="(crew, i) in data" :key="i" :class="{selected: i === nowIndex, 'crew-item': true}" @click="nowIndex=i"></li>
    </ul>
    <div class="crew-dsecription">
      <p class="crew-role">{{ data[nowIndex].role }}</p>
      <p class="crew-name">{{ data[nowIndex].name }}</p>
      <p class="crew-bio">{{  data[nowIndex].bio }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import store from '../store'

const data = store.data.crew
const nowIndex = ref(0)

function getImageUrl(suffix) {
  return store.getAssetUrl(".." + data[nowIndex.value].images[suffix])
}

</script>

<style lang="scss" scoped>
@import '../assets/styles/variables.scss';

.crew-container {
  background: url('../assets/crew/background-crew-mobile.jpg') top left / cover no-repeat;
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

.crew-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  height: 223px;
}

.head-prefix {
  color: grey;
  margin-right: 5px;
}

.crew-items {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  padding: 0 120px;
  margin-top: 30px;
}

.crew-item {
  display: block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: grey;
}

.crew-item.selected {
  background-color: white;
}

.crew-role {
  color: grey;
  text-align: center;
  margin-top: 30px;;
  text-transform: uppercase;
}

.crew-name {
  font-size: 24px;
  line-height: 1.8;
  color: white;
  text-transform: uppercase;
  text-align: center;
}

.crew-bio {
  text-align: center;
  padding-left: 40px;
  padding-right: 40px;
  line-height: 1.5;
  color: $soft-purple;
  padding-bottom: 70px;
}

</style>