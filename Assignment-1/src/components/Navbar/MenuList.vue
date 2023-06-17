<script>
import { ref } from 'vue'

export default {
  setup() {
    const menuItems = ref([
      { id: 1, label: 'Home', url: '#header' },
      { id: 2, label: 'Team', url: '#team' },
      { id: 3, label: 'Work', url: '#work' },
      { id: 4, label: 'Contact', url: '#contact-us' },
      { id: 4, label: 'Follow Us', url: '#follow-us' }
    ])

    return {
      menuItems
    }
  }
}
</script>

<template>
  <ul class="links-menu">
    <li v-for="item in menuItems" :key="item.id">
      <a :href="item.url">{{ item.label }}</a>
    </li>
  </ul>
</template>

<style scoped>
ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  padding: 15px;
}
ul a {
  text-decoration: none;
  color: white;
}
</style>
