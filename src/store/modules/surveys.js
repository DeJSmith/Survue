import Vue from "vue";
import Vuex from "vuex";
import shortid from "shortid";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    surveys: [
      {
        id: shortid.generate(),
        title: "Me mes",
        questions: [
          {
            question: "Is water wet?",
            answers: ["Yes", "No", "37"],
          },
          {
            question: "How much Dogecoin is one Bitcoin worth? 🙊",
            answers: ["1014023.04101", "133,700,000.2", "much"],
          },
          {
            question: "Where is GME going?",
            answers: ["To the dogs 🐶", "To the moon 🚀", "The sea floor 🌊"],
          },
        ],
        created: new Date().toDateString(),
      },
      {
        id: shortid.generate(),
        title: "Lord of the Rings",

        created: new Date().toDateString(),
        questions: [
          {
            question:
              "What is the first voice we hear in The Fellowship of the Ring?",
            answers: ["Frodo", "Gandalf", "Galadriel", "Elrond"],
          },
          {
            question: "What does Gollum call the Ring of Power?",
            answers: ["My Darling", "My Precious", "My Lovely", "My Treasure"],
          },
          {
            question: "In The Two Towers, who is Saruman's spy in Rohan?",
            answers: ["Gamling", "Gimli", "Gollum", "Grima"],
          },
          {
            question: "In The Return of the King, who kills the Witch King?",
            answers: ["Eowyn", "Arwen", "Gandalf", "Aragorn"],
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
