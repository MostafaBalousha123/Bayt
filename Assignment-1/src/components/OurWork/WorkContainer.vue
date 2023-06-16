<script setup>
import { ourWorkData } from '../../constant'
import WorkCard from '../OurWork/WorkCard.vue'
</script>

<template>
  <section>
      <div class="our-work-description">
        <h2>Our Work</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Veniam nisi, natus itaque architecto consequatur impedit tempora hic nam at a iure assumenda temporibus.
          Facilis sed, molestias a quis velit nobis?</p>
      </div>

      <WorkCard
        v-for="work in ourWorkData"
        :key="work.username"
        :title="work.title"
        :image="work.image"
        :description="work.description"
      />
  </section>
</template>

<style scoped>
  section{
    padding: 30px 5px ;
    background-color: #333333;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  .our-work-description{
    width: 300px;
    color: white;
    height: auto;
  }
  .our-work-description p {
    margin-top: 20px;
    line-height: 24px;
  }

  @media (min-width: 768px) {  
  .our-work-description{
    height: 300px;
  }
}
</style>
