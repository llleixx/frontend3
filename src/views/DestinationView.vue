<template>
  <div class="destination-container">
    <h1><span class="head-prefix">01</span> Pick your destination</h1>
    <div class="planet-wrapper">
      <picture class="planet-image">
        <source :srcset="getImageUrl('webp')" type="image/webp" width="200px" height="200px">
        <img alt="planet" :src="getImageUrl('png')" width="200px" height="200px" />
      </picture>
    </div>
    <ul class="planet-items">
      <li v-for="(planet, i) in data" :key="i" :class="{selected: i === nowIndex, 'planet-item': true}" @click="nowIndex=i">{{planet.name}}</li>
    </ul>
    <h2 class="planet-name">{{ data[nowIndex].name }}</h2>
    <p class="planet-description">{{ data[nowIndex].description }}</p>
    <hr />
    <h2 class="planet-info-header">AVG. DISTANCE</h2>
    <p class="planet-info-footer">{{  data[nowIndex].distance }}</p>
    <h2 class="planet-info-header">EST. TRAVEL TIME</h2>
    <p class="planet-info-footer">{{  data[nowIndex].travel }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import store from '../store'

const data = store.data.destinations
const nowIndex = ref(0)

function getImageUrl(suffix) {
  return store.getAssetUrl(".." + data[nowIndex.value].images[suffix])
}

</script>

<style lang="scss" scoped>
@import '../assets/styles/variables.scss';

.destination-container {
  background: url('../assets/destination/background-destination-mobile.jpg') top left / cover no-repeat;
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

.planet-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
}

.head-prefix {
  color: grey;
  margin-right: 5px;
}

.planet-items {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  padding: 0 50px;
  margin-top: 30px;
  font-size: 14px;
  font-weight: 700;
}

.planet-item {
  padding-bottom: 5px;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: $soft-purple;
}

.planet-item.selected {
  border-bottom: 5px solid white;
  color: white;
}

.planet-name {
  font-size: 58px;
  color: white;
  font-weight: normal;
  text-transform: uppercase;
  display: block;
  text-align: center;
  margin-top: 30px;
}

.planet-description {
  margin: 40px;
  margin-top: 30px;
  text-align: center;
  color: $soft-purple;
  line-height: 1.6;
}

hr {
  color: $soft-purple;
  margin: 40px;
}

.planet-info-header {
  text-align: center;
  color: $soft-purple;
  font-size: 14px;
  margin-bottom: 20px;
  text-transform: uppercase;
}

.planet-info-footer {
  padding-bottom: 40px;
  text-align: center;
  font-size: 28px;
  text-transform: uppercase;
}

</style>