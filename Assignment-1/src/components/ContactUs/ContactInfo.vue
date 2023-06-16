<script>
import { ref } from 'vue';
import LocationIcon from '../Icons/LocationIcon.vue';
import PhoneIcon from '../Icons/PhoneIcon.vue';
import EmailIcon from '../Icons/EmailIcon.vue';

export default {
  setup() {
    const contactItems = ref([
      { id: 5, icon: LocationIcon, value: 'Palestine, Gaza' },
      { id: 6, icon: PhoneIcon, value: '+97059573056555' },
      { id: 7, icon: EmailIcon, value: 'mbalousha2001@gmail.com' },
    ]);

    return {
      contactItems,
    };
  },
  components: {
    PhoneIcon,
    EmailIcon,
    LocationIcon
  },
};
</script>

<template>
  <div class="contact-info">
    <h2>Contact Us</h2>
    <h4>Address</h4>
    <p>Lorem, ipsum dolor sit amet elit.</p>
    <div>
      <div class="contact-item" v-for="item in contactItems" :key="item.id">
        <component :is="item.icon" />
        <p>{{ item.value }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contact-info{
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 15px;
  width: 100%;
}
h2{
  width: max-content;
  border-bottom: #42b883 solid 5px;
}
.contact-item {
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 10px;
  padding: 5px;
}

@media (min-width: 768px) {
    div.contact-info{
      max-width: 280px;
    }
  }
</style>
