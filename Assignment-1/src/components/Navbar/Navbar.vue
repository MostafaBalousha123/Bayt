<script>
import MenuList from './MenuList.vue'
import MobileDrawer from './MobileDrawer.vue'

export default {
  components: {
    MobileDrawer,
    MenuList
  }
}
</script>

<template>
  <div>
    <nav>
      <div class="logo">
        <img src="../../assets/images/logo.png" alt="logo">
      </div>
      <MobileDrawer>
        <MenuList />
      </MobileDrawer>
      <MenuList class="links" />
    </nav>
  </div>
</template>

<style scoped>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #0d1721;
  color: white;
  height: 55px;
  position:fixed;
  width: 100%;
  z-index: 2;
}

.logo img {
  width: 30px;
  height: 30px;
}

.links {
  display: none;
}

@media (min-width: 768px) {
  nav {
    justify-content: start;
  }
  .links {
    display: flex;
    flex-direction: row;
    gap: 25px;
  }
}
</style>
