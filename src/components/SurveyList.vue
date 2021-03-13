<template>
  <div>
    <div class="title">My Surveys</div>
    <div class="survey_list__container">
      <SurveyCard
        v-for="survey in allSurveys"
        :key="survey.id"
        :survey="survey"
        v-on:click.native="selectSurvey(survey)"
      />
    </div>
  </div>
</template>

<script>
import SurveyCard from "./SurveyCard";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "SurveyList",
  components: {
    SurveyCard,
  },
  computed: mapGetters(["allSurveys"]),
  methods: {
    ...mapActions(["selectSurvey"]),
  },
};
</script>

<style scoped>
.survey_list__container {
  min-height: 850px;
  max-height: 850px;
  width: 100%;
  padding: 10px;
  overflow-y: scroll;
  border: rgba(0, 0, 0, 0.1) 1px solid;
  border-radius: 5px;
}

.title {
  font-size: 25px;
  font-weight: 500;
  margin-bottom: 20px;
}
</style>
