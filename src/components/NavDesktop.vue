<template>
  <div class="header-container">
    <div class="log-wrapper image-wrapper">
      <img src="../assets/shared/logo.svg" alt="logo" height="50" width="50" />
    </div>
    <nav>
      <RouterLink v-for="(name, i) in contents" :to="{ name: name }" :key="i" :class="{ selected: i === nowIndex }">
        <span class="link-prefix">{{ '0' + i }}</span> {{ name.toUpperCase() }}
      </RouterLink>
    </nav>
  </div>
</template>

<script setup>
import store from '../store'
const { contents, nowIndex } = store
</script>

<style lang="scss" scoped>
@import '../assets/styles/variables.scss';

.header-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: $dark-black;
  height: 100px;

  .image-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 30px;
  }
}

nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: white;
  background-color: #151923;

  a {
    letter-spacing: 2px;
    margin-left: 30px;
    padding-top: 18px;
    padding-bottom: 18px;

    &:last-child {
      margin-right: 30px;
    }
  }

  a.selected {
    border-bottom: 3px solid white;
  }

  .link-prefix {
    font-weight: 1000;
  }
}

.link-prefix {
  display: none;
}

@media (min-width: 1024px) {
  .link-prefix {
    display: inline;
  }

  nav a {
    margin-left: 60px;

    &:first-child {
      margin-left: 120px;
    }

    &:last-child {
      margin-right: 120px;
    }
  }
}
</style>