<script setup>
  import { teamData } from '../../constant';
  import TeamCard from '../Team/TeamCard.vue';

</script>

<template>
  <section>
    <h2>Our Team</h2>
    <p>Meet The Team - our offices rats:</p>
    <div class="team-container">
      <TeamCard 
        v-for="member in teamData" 
        :key="member.username" 
        :username="member.username" 
        :image="member.image" 
        :jobTitle="member.jobTitle" 
        />
    </div>
  </section>
</template>

<style scoped>
  section{
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    margin: 35px;
  }

  div.team-container{
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 15px;
    flex-wrap: wrap;
  }
</style>