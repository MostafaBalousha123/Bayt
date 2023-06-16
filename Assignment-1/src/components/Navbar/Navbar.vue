<script>
import MenuList from './MenuList.vue';
import MobileDropdown from './MobileDropdown.vue'

export default {
  components: {
    MobileDropdown,
    MenuList
}
}
</script>

<template>
  <div>
    <nav>
      <div class="logo">Logo</div>
      <MobileDropdown>
        <MenuList />
      </MobileDropdown>
      <MenuList class="links" />
    </nav>
    <!-- Your other content here -->
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
  height: 45px;
}

.logo {
  font-weight: bold;
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
    gap: 10px;
  }
}
</style>
