<script setup>
import { RouterView } from 'vue-router'
import { onMounted, ref } from 'vue'
import NavMobile from './components/NavMobile.vue'
import NavDesktop from './components/NavDesktop.vue'

const isMobile = ref(true)

function checkMobile() {
  isMobile.value = window.innerWidth < 768
}

onMounted(() => {
  checkMobile()
  window.addEventListener("resize", checkMobile)
})
</script>


<template>
  <header>
    <component :is="isMobile ? NavMobile : NavDesktop"></component>
  </header>
  <RouterView style="flex: 1"/>
</template>

<style lang='scss' scoped>
</style>
