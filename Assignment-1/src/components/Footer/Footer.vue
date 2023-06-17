<script setup>
import FacebookIcon from '../Icons/FacebookIcon.vue';
import TwitterIcon from '../Icons/TwitterIcon.vue';
import LinkedinIcon from '../Icons/LinkedinIcon.vue';
import InstagramIcon from '../Icons/InstagramIcon.vue';
import GooglePlusIcon from '../Icons/GooglePlusIcon.vue';

</script>
<template>
    <footer id="follow-us" class="flex-col">
      <p>Follow Us</p>
      <div class="flex">
        <FacebookIcon />
        <GooglePlusIcon />
        <InstagramIcon />
        <TwitterIcon />
        <LinkedinIcon />
      </div>
    </footer>
  </template>
  
  <style scoped>
    footer{
      background-color: #0d1721;
      color: white;
      height: 180px;
      gap: 25px;
    }
  </style>
  