<template>
  <div class="card">
    <div class="title">{{ survey.title }}</div>
    <div>{{ survey.questions.length }} questions</div>
    <div>created {{ survey.created }}</div>
    <div v-if="survey.updated !== undefined">updated {{ survey.updated }}</div>
  </div>
</template>

<script>
export default {
  name: "SurveryCard",
  props: {
    survey: { type: Object, required: true },
  },
};
</script>

<style scoped>
.card {
  width: calc(100% - 20px);
  height: 150px;
  font-size: 16px;
  font-weight: 400;
  box-shadow: 5px 5px 10px 5px rgba(0, 0, 0, 0.1);
  padding: 5px 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  transition: all 0.3s ease-in-out;
}

.card:hover {
  cursor: pointer;
  transform: scale(1.01);
}

.title {
  font-size: 20px;
  font-weight: 500;
}

button {
  padding: 10px 15px;
  font-size: 16px;
  font-weight: 500;
  background: white;
  border: 1px solid rgb(168, 56, 50);
  border-radius: 5px;
  color: rgb(168, 56, 50);
  transition: all 0.3s ease-in-out;
  margin: 5px;
  z-index: 50;
}

button:hover {
  cursor: pointer;
  background: rgb(168, 56, 50);
  color: white;
}
</style>
