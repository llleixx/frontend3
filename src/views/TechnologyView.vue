<template>
  <div class="technology-container">
    <h1><span class="head-prefix">03</span> MEET YOUR technology</h1>
    <div class="technology-main">
      <div class="technology-wrapper">
        <picture>
          <source :srcset="getImageUrl('landscape')" type="image/jpg" media="(max-width: 1023px)" />
          <source :srcset="getImageUrl('portrait')" type="image/jpg" media="(min-width: 1024px)" />
          <img class="technology-image" :src="getImageUrl('portrait')" alt="technology picture" />
        </picture>
      </div>
      <div class="technology-section">
        <ul class="technology-items">
          <li v-for="(technology, i) in data" :key="i" :class="{ selected: i === nowIndex, 'technology-item': true }"
            @click="nowIndex = i">{{ i }}</li>
        </ul>
        <div class="technology-descriptions">
          <p class="technology-fixed">THE TERMINOLOGY...</p>
          <p class="technology-name">{{ data[nowIndex].name }}</p>
          <p class="technology-description">{{ data[nowIndex].description }}</p>
        </div>
      </div>

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
  width: 40%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
}

.technology-item {
  display: block;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: transparent;
  border: 2px solid grey;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
}

.technology-item.selected {
  background-color: white;
  border-color: white;
  color: $dark-black;
}

.technology-fixed {
  color: $soft-purple;
  margin-top: 40px;
  text-transform: uppercase;
}

.technology-name {
  font-size: 24px;
  line-height: 1.8;
  color: white;
  text-transform: uppercase;
}

.technology-descriptions {
  text-align: center;
  margin-top: 20px;
  width: 60%;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.5;
  color: $soft-purple;
  padding-bottom: 70px;
}

@media (min-width: 768px) {
  .technology-container {
    min-height: calc(100vh - 100px);
  }

  h1 {
    text-align: start;
    padding-left: 20px;
    padding-top: 30px;
    padding-bottom: 30px;
  }
}

@media (min-width: 1024px) {
  .technology-main {
    display: flex;
    flex-direction: row;
  }

  h1 {
    margin-left: 80px;
    padding-left: 0;
    padding-top: 20px;
  }

  .technology-wrapper {
    flex: 1 1 400px;
    order: 1;
  }

  .technology-section {
    flex: 1 1 600px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .technology-items {
    flex-direction: column;
    width: auto;
    height: 70%;
    margin-left: 80px;
  }

  .technology-item {
    width: 65px;
    height: 65px;

    &:hover {
      cursor: pointer;

      &:not(.selected) {
        border-color: #DDD;
      }
    }
  }

  .technology-image {
    width: 80%;
  }

  .technology-descriptions {
    text-align: start;
    margin-left: 0;
  }

  .technology-name {
    font-size: 56px;
    text-wrap: nowrap;
  }
}
</style>