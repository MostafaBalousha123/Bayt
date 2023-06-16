<script>
import CustomInput from '../Custom/CustomInput.vue'
export default {
  components: {
    CustomInput,
  },
  methods: {
    submitForm() {
      console.log('is submitted')
    },
  },
};
</script>

<template>
  <div class="contact-form">
    <form @submit.prevent="submitForm">
      <CustomInput label="Name" type="text" name="name"/>
      <CustomInput label="Email" type="email" name="email"/>
      <CustomInput label="Message" type="text" name="message"/>
      <div class="flex">
        <div class="flex is-liked-input">
          <label>I like it.</label>
          <input type="checkbox" name="isLiked" value="false">
        </div>
        <button type="submit">send</button>
      </div>
    </form>
  </div>
</template>

<style scoped>
.contact-form {
  width: 100%;
  padding: 20px 10px;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px,
    rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
}

.is-liked-input{
  gap: 10px;
  flex-direction: row-reverse;
}

button{
  padding: 5px 10px;
  background-color: #2a2a2a;
  color: white;
}

@media (min-width: 768px) {
  .contact-form{
      flex-direction: row;
      width: 60%;
    }
  }
</style>
