<script>
export default {
  props: ['label', 'type', 'name']
};
</script>

<template>
    <div class="custom-input">
      <label>{{ label }}</label>
      <input :type="type" :name="name"/>
    </div>
  </template>
  

  
  <style scoped>
  .custom-input {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    margin: 15px 0;
  }
  
  input {
    border: none;
    border-bottom: 1px solid rgb(205, 205, 205);
    font-size: 17px;
  }
  
  input:focus {
    outline: none;
  }
  </style>
  