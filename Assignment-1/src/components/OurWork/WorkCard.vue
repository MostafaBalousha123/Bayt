<script>
export default {
  props: ['image', 'title', 'description']
}
</script>

<template>
  <div class="work-card">
    <img :src="image" :alt="title" />
    <div>
      <p class="title">{{ title }}</p>
      <p class="description">{{ description }}</p>
    </div>
  </div>
</template>

<style scoped>
div.work-card {
  width: 300px;
  height: 400px;
  margin-top: 30px;
  border-radius: 5px;
  background-color: white;
  overflow: hidden;
}
div.work-card img {
  height: 200px;
  width: 100%;
  object-fit: cover;
}

div.work-card div {
  width: 90%;
  margin: 10px auto;
  display: flex;
  flex-direction: column;
  gap:10px
}

.title {
  font-size: 18px;
  font-weight: 600;
}

.description {
  color: rgb(77, 77, 77);
  font-size: 15px;
  line-height: 20px;
}

@media (min-width: 768px) {
  div.work-card {
    margin-top: 20px;
  }
}
</style>
