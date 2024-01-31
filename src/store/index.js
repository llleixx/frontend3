import data from '@/assets/shared/data.json'

const assets = import.meta.glob(['../assets/**/*.png', '../assets/**/*.webp', '../assets/**/*.jpg'], {eager: true})

const getAssetUrl = (path) => {
  if (assets[path]) {
    return assets[path].default;
  }
}

const store = {
  data,
  getAssetUrl
}

export default store