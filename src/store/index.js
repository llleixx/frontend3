import data from '@/assets/shared/data.json'
import { ref } from 'vue'

const assets = import.meta.glob(['../assets/**/*.png', '../assets/**/*.webp', '../assets/**/*.jpg'], { eager: true })
const contents = ["home", "destination", "crew", "technology"]
const nowIndex = ref(0)

const getAssetUrl = (path) => {
  if (assets[path]) {
    return assets[path].default;
  }
}

const store = {
  data,
  getAssetUrl,
  contents,
  nowIndex
}

export default store