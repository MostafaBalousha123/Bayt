<script setup>
  import ContactInfo from './ContactInfo.vue'
  import ContactForm from './Form.vue'

</script>

  <template>
    <section id="contact-us">
      <ContactInfo />
      <ContactForm />
    </section>
  </template>
  
  <style scoped>
    #contact-us{
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
    #contact-us{
      flex-direction: row;
    }
  }
  </style>
  