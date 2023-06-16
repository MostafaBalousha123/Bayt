<script>
export default {
  props: ['image', 'username', 'jobTitle']
}
</script>

<template>
  <div class="team-card">
    <img :src="image" :alt="username" />
    <p class="username">{{ username }}</p>
    <p class="job-title">{{ jobTitle }}</p>
  </div>
</template>

<style scoped>
div.team-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 300px;
  margin-top: 30px;
}

div.team-card img {
  height: 130px;
  width: 130px;
  border-radius: 50%;
  overflow: hidden;
  object-fit: cover;
}

.username {
  font-size: 20px;
  font-weight: 600;
}
</style>
