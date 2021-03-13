import Vue from "vue";
import Vuex from "vuex";
import shortid from "shortid";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    surveys: [
      {
        id: 1,
        title: "First Survey",
        questions: [
          {
            question: "Is the Sky Blue?",
            answers: ["Yes", "No"],
          },
          {
            question: "Is the Sky Blue?",
            answers: ["Yes", "No"],
          },
        ],
        created: new Date().toDateString(),
      },
      {
        id: 2,
        title: "Second Survey",

        created: new Date().toDateString(),
        questions: [
          {
            question: "24 * 4?",
            answers: ["13", "24", "69", "96"],
          },
          {
            question: "Is the Sky Blue?",
            answers: ["Yes", "No"],
          },
        ],
      },
    ],
    selectedSurvey: null,
  },
  mutations: {
    setSelectedSurvey: (state, payload) => (state.selectedSurvey = payload),
    newSurvey: (state, survey) => state.surveys.unshift(survey),
    clearSelectedSurvey: (state) => (state.selectedSurvey = null),
    updateSurvey: (state, payload) => {
      state.surveys.splice(payload.index, 1);
      state.surveys.unshift(payload.updated);
    },
  },
  actions: {
    selectSurvey(state, survey) {
      console.log({ ...survey });
      this.commit("setSelectedSurvey", { ...survey });
    },
    clearSelectedSurvey() {
      console.log("clearing selected survey");
      this.commit("clearSelectedSurvey");
    },
    createSurvey(state, survey) {
      console.log(survey);
      console.log("Creating new Survey");
      this.commit("newSurvey", {
        id: shortid.generate(),
        title: survey.title,
        questions: survey.questions,
        created: new Date().toDateString(),
      });
    },
    updateSurvey(state, updated) {
      console.log("updating survey");
      console.log("updated value", updated);
      updated["updated"] = new Date().toDateString();
      const index = this.state.surveys.map((e) => e.id).indexOf(updated.id);
      console.log(index);
      this.commit("updateSurvey", { index: index, updated: updated });
    },
  },
  modules: {},
  getters: {
    allSurveys: (state) => state.surveys,
    selectedSurvey: (state) => state.selectedSurvey,
  },
});
