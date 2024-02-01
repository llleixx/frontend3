<template>
  <div class="destination-container">
    <h1><span class="head-prefix">01</span> Pick your destination</h1>
    <div class="destination-main">
      <div class="planet-wrapper">
        <picture>
          <source :srcset="getImageUrl('webp')" type="image/webp">
          <img class="planet-image" alt="planet" :src="getImageUrl('png')" width="200px" height="200px" />
        </picture>
      </div>
      <div class="planet">
        <ul class="planet-items">
          <li v-for="(planet, i) in data" :key="i" :class="{ selected: i === nowIndex, 'planet-item': true }"
            @click="nowIndex = i">{{ planet.name }}</li>
        </ul>
        <h2 class="planet-name">{{ data[nowIndex].name }}</h2>
        <p class="planet-description">{{ data[nowIndex].description }}</p>
        <hr />
        <div class="planet-data">
          <div class="planet-distance">
            <h2 class="planet-info-header">AVG. DISTANCE</h2>
            <p class="planet-info-footer">{{ data[nowIndex].distance }}</p>
          </div>
          <div class="planet-travel">
            <h2 class="planet-info-header">EST. TRAVEL TIME</h2>
            <p class="planet-info-footer">{{ data[nowIndex].travel }}</p>
          </div>
        </div>
      </div>
    </div>
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

@media (min-width: 768px) {
  .destination-container {
    min-height: calc(100vh - 100px);
  }

  h1 {
    text-align: start;
    padding-left: 40px;
  }

  .planet-items {
    padding-left: 180px;
    padding-right: 180px;
    margin-top: 40px;
  }

  .planet-image {
    width: 300px;
    height: 300px;
  }

  .planet-description {
    width: 500px;
    margin: auto;
    margin-top: 20px;
    margin-bottom: 40px;
  }

  .planet-data {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding-left: 40px;
    padding-right: 40px;
  }

}

@media (min-width: 1024px) {
  .destination-main {
    display: flex;
    flex-direction: row;
    padding-top: 50px;
  }

  h1 {
    padding-left: 0;
    margin-left: 80px;
  }

  .planet {
    flex: 1;
  }

  .planet-wrapper {
    flex: 1;
  }

  .planet-image {
    height: 400px;
    width: 400px;
  }

  .planet-description,
  .planet-name {
    text-align: start;
    margin-left: 0;
  }

  .planet-items,
  .planet-data {
    justify-content: flex-start;
    padding: 0;
  }

  .planet-item,
  .planet-data {
    margin-right: 30px;
  }

  .planet-info-header {
    text-align: start;
  }

  .planet-travel {
    margin-left: 50px;
  }

  hr {
    margin-left: 0;
  }

  .planet-items {
    cursor: pointer;
  }
}
</style>