<template>
  <div class="crew-container">
    <h1><span class="head-prefix">02</span> MEET YOUR CREW</h1>
    <div class="crew-main">
      <div class="crew-wrapper">
        <picture>
          <source :srcset="getImageUrl('webp')" type="image/webp" />
          <img class="crew-image" alt="crew" :src="getImageUrl('png')" width="170px" />
        </picture>
      </div>
      <div class="crew-section">
        <ul class="crew-items">
          <li v-for="(crew, i) in data" :key="i" :class="{ selected: i === nowIndex, 'crew-item': true }"
            @click="nowIndex = i">
          </li>
        </ul>
        <div class="crew-description">
          <p class="crew-role crew-p">{{ data[nowIndex].role }}</p>
          <p class="crew-name crew-p">{{ data[nowIndex].name }}</p>
          <p class="crew-bio crew-p">{{ data[nowIndex].bio }}</p>
        </div>
      </div>
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

.crew-main {
  display: flex;
  flex-direction: column;
}

.crew-section {
  display: flex;
  flex-direction: column;
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
  width: 100px;
  margin-left: auto;
  margin-right: auto;
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
  margin-top: 30px;
  ;
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
  width: 70%;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.5;
  color: $soft-purple;
}

.crew-description {
  padding-bottom: 70px;
}

@media (min-width: 768px) {
  h1 {
    text-align: start;
    padding-left: 20px;
  }

  .crew-container {
    min-height: calc(100vh - 100px);
  }

  .crew-description {
    margin-left: auto;
    margin-right: auto;
    order: 1;
    padding-bottom: 20px;
  }

  .crew-items {
    order: 2;
    margin-top: 20px;
  }

  .crew-wrapper {
    order: 3;
    height: auto;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
  }

  .crew-image {
    width: 100%;
  }
}

@media (min-width: 1024px) {
  .crew-main {
    flex-direction: row;
  }

  .crew-wrapper {
    flex: 1;
  }

  .crew-section {
    flex: 1;
    justify-content: center;
    align-items: center;
  }

  .crew-p,
  .crew-items {
    text-align: start;
    margin-left: 0;
  }

  h1 {
    margin-left: 80px;
    padding-left: 0;
  }

  .crew-section {
    margin-left: 80px;
    padding-left: 0;
    margin-right: auto;
  }

  .crew-name {
    font-size: 58px;
    text-wrap: nowrap;
  }

  .crew-role {
    font-size: 32px;
  }

  .crew-bio {
    font-size: 18px;
  }

  .crew-items {
    margin-top: 80px;
  }

  .crew-image {
    width: 75%;
  }

  .crew-container {
    display: flex;
    flex-direction: column;
  }

  .crew-main {
    flex: 1;
  }


  .crew-item {
    width: 15px;
    height: 15px;
    cursor: pointer;
  }

  .crew-wrapper {
    align-items: flex-end;
  }
}
</style>