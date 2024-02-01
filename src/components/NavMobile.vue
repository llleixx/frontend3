<template>
  <div class="header-container">
    <div class="log-wrapper image-wrapper">
      <img src="../assets/shared/logo.svg" alt="logo" height="30" width="30" />
    </div>
    <div class="hamburger-wrapper image-wrapper" @click="open = !open">
      <img src="../assets/shared/icon-hamburger.svg" alt="more" height="25" width="25" v-show="open" />
    </div>
  </div>

  <Teleport to="body">
    <div class="sidebar" ref="sidebar">
      <div class="sidebar-header">
        <img src="../assets/shared/icon-close.svg" alt="close" height="20" width="20" @click="open = !open" />
      </div>
      <nav>
        <RouterLink v-for="(name, i) in contents" :to="{ name: name }" :key="i" :class="{ selected: i === nowIndex }">
          <span class="link-prefix">{{ '0' + i }}</span> {{ name.toUpperCase() }}
        </RouterLink>
      </nav>
    </div>
    <div class="sidebar-mask" ref="sidebarMask" @click="open = !open"></div>
  </Teleport>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'
import store from '../store'

const { nowIndex, contents } = store

const open = ref(true)
const sidebar = ref(null)
const sidebarMask = ref(null)

onMounted(() => {
  watch(open, () => {
    sidebar.value.classList.toggle('open')
    sidebarMask.value.classList.toggle('open')
  })
})
</script>

<style lang="scss" scoped>
@import '../assets/styles/variables.scss';

.header-container {
  display: flex;
  flex-direction: row;
  padding: 20px;
  justify-content: space-between;
  background-color: $dark-black;

  .image-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.sidebar-header {
  padding: 15px;
  position: relative;

  img {
    position: absolute;
    right: 0;
  }
}

nav {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 60px;
  margin-left: 20px;

  a {
    margin-bottom: 30px;
    letter-spacing: 2px;
  }

  .link-prefix {
    font-weight: 1000;
  }
}

.sidebar {
  width: 250px;
  position: fixed;
  right: -250px;
  top: 0;
  bottom: 0;
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.2);
  color: white;
  transition: right 0.3s;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  padding: 10px;
  z-index: 2;
}

.sidebar.open {
  right: 0;
}

.sidebar-mask {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
}

.sidebar-mask.open {
  display: block;
}
</style>