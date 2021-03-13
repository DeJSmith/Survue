<template>
  <header class="header">
    <div class="logo_container">
      <span class="logo_text">Sur</span
      ><img class="logo_img" src="../assets/logo.png" /><span class="logo_text"
        >ue</span
      >
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
.header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.2);
  padding: 15px 0px;
  margin-bottom: 50px;
}

.logo_container {
  display: flex;
}

.logo_img {
  height: 50px;
  width: auto;
  align-self: center;
  justify-self: center;
  margin: 0px -8px 0px -6px;
}

.logo_text {
  font-size: 50px;
  font-weight: 600;
  align-self: center;
  justify-self: center;
}
</style>
