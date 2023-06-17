<script>
import { ref } from 'vue'
import MenuIcon from '../Icons/MenuIcon.vue'
import CloseIcon from '../Icons/CloseIcon.vue'

export default {
  name: 'MobileDrawer',
  components: {
    MenuIcon,
    CloseIcon
  },
  setup() {
    const isOpen = ref(false)

    const toggleMenu = () => {
      isOpen.value = !isOpen.value
    }

    const closeDrawer = () => {
      isOpen.value = false
    }

    return {
      isOpen,
      toggleMenu,
      closeDrawer
    }
  }
}
</script>

<template>
  <div class="menu" :class="{ active: isOpen }">
    <button class="hamburger" @click="toggleMenu">
      <CloseIcon v-if="isOpen" />
      <MenuIcon v-else />
    </button>
      <div v-if="isOpen" class="dropdown" key="dropdown">
        <slot  @link-click="closeDrawer" />
      </div>
  </div>
</template>

<style scoped>
.menu {
  position: relative;
}

.hamburger {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 25px;
  cursor: pointer;
  border: none;
  background-color: inherit;
}

.dropdown {
  position: fixed;
  top: 55px;
  right: 0;
  bottom: 0;
  width: 300px;
  background-color: #0d1721;
  transition: transform 0.3s ease;
  transform: translateX(100%);
  z-index: 999;
}

.menu.active .dropdown {
  transform: translateX(0%);
}

@media (min-width: 768px) {
  .menu {
    display: none;
  }
}
</style>
