<template>
  <div>
    <div class="survey_header">
      <div class="title" v-if="!!selectedSurvey">Edit Survey</div>
      <div class="title" v-if="!selectedSurvey">Create Survey</div>
      <button @click="clearSelectedSurvey" class="button">
        New survey
      </button>
    </div>

    <div class="survey_container">
      <CreateSurvey v-if="!selectedSurvey" />
      <UpdateSurvey v-if="!!selectedSurvey" />
    </div>
  </div>
</template>

<script>
import CreateSurvey from "./CreateSurvey";
import UpdateSurvey from "./UpdateSurvey";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "SurveryView",
  components: {
    CreateSurvey,
    UpdateSurvey,
  },
  methods: {
    ...mapActions(["clearSelectedSurvey"]),
  },
  computed: mapGetters(["selectedSurvey"]),
};
</script>

<style scoped>
.survey_container {
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 5px;
  border: rgba(0, 0, 0, 0.1) 1px solid;
  min-height: 830px;
  max-height: 830px;
  padding: 20px;
  overflow-y: scroll;
  height: 100%;
}

.title {
  font-size: 25px;
  font-weight: 500;
  margin-bottom: 5px;
}

.button {
  padding: 10px 15px;
  font-size: 16px;
  font-weight: 500;
  background: white;
  border: 1px solid rgb(50, 168, 127);
  border-radius: 5px;
  color: rgb(50, 168, 127);
  transition: all 0.3s ease-in-out;
  margin: 5px;
}

.button:hover {
  cursor: pointer;
  background: rgb(50, 168, 127);
  color: white;
}

.survey_header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: space-between;
}
</style>
