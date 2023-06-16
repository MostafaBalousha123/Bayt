<script setup>
  import ContactInfo from './ContactInfo.vue'
  import ContactForm from './Form.vue'

</script>
<template>
    <div class="contact-us">
      <ContactInfo />
      <ContactForm />
    </div>
  </template>
  
  <style scoped>
    div.contact-us{
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: column;
      flex-wrap: wrap;
      padding: 15px 30px;
      margin: 30px 0;
      gap: 30px;
    }

  @media (min-width: 768px) {
    div.contact-us{
      flex-direction: row;
    }
  }
  </style>
  