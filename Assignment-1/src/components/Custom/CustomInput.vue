<script>
export default {
  props: ['label', 'type']
};
</script>

<template>
    <div class="custom-input">
      <label>{{ label }}</label>
      <input :type="type" />
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
  