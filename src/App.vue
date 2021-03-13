<template>
  <div id="app">
    <Header />
    <div class="app_container">
      <SurveyList />
      <Survey />
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
import Survey from "./components/Survey";
import SurveyList from "./components/SurveyList";

export default {
  name: "App",
  components: {
    Header,
    Survey,
    SurveyList,
  },
};
</script>

SurveyView
<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,200;0,400;0,500;0,700;0,800;1,200&display=swap");
#app {
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
body {
  margin: 0;
}

.app_container {
  display: grid;
  grid-template-columns: 2fr 4fr;
  max-width: 1200px;
  height: 100vh;
  margin: auto;
  column-gap: 35px;
}
</style>
