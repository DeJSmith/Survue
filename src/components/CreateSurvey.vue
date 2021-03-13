<template
  ><div class="create_suvery__container">
    <form @submit="onSubmit">
      <div class="form_group">
        <label class="input_label">Survey Title</label>
        <input required class="input" v-model="title" />
      </div>

      <div
        class="question"
        v-for="(question, qIndex) in questions"
        :key="qIndex"
      >
        <div class="form_group">
          <label class="input_label">Question {{ qIndex + 1 }}</label>
          <input class="input" v-model="questions[qIndex].question" />
        </div>

        <div>
          <div
            class="form_group_secondary"
            v-for="(answer, aIndex) in questions[qIndex].answers"
            :key="aIndex"
          >
            <label class="input_label_secondary">Answer {{ aIndex + 1 }}</label>
            <input
              required
              class="input"
              v-model="questions[qIndex].answers[aIndex]"
            />
          </div>
        </div>
        <button
          v-if="questions[qIndex].answers.length < 4"
          class="button_add"
          @click="addAnswer(qIndex)"
        >
          +
        </button>
        <button
          v-if="questions[qIndex].answers.length > 1"
          class="button_minus"
          @click="removeAnswer(qIndex)"
        >
          -
        </button>
      </div>
      <button
        v-if="questions.length < 4"
        class="button_add"
        @click="addQuestion"
      >
        Add Question
      </button>
      <button
        v-if="questions.length > 1"
        class="button_minus"
        @click="removeQuestion"
      >
        Remove Question
      </button>

      <button type="submit" class="button_add">Create Survey</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "CreateSruvey",
  data() {
    return {
      title: "",
      questions: [
        {
          question: "",
          answers: [""],
        },
      ],
    };
  },
  methods: {
    ...mapActions(["createSurvey"]),
    onSubmit(e) {
      e.preventDefault();
      console.log({ title: this.title, questions: this.questions });
      this.createSurvey({ title: this.title, questions: this.questions });
      this.title = "";
      this.questions = [
        {
          question: "",
          answers: [""],
        },
      ];
    },
    addQuestion() {
      console.log("add questions");
      if (this.questions.length < 4) {
        this.questions.push({
          question: "",
          answers: [""],
        });
      }
    },
    removeQuestion() {
      console.log("remove questions");
      if (this.questions.length > 1) {
        this.questions.splice(-1, 1);
      }
    },
    addAnswer(index) {
      if (this.questions[index].answers.length < 4) {
        this.questions[index].answers.push("");
      }
    },
    removeAnswer(index) {
      if (this.questions[index].answers.length > 1) {
        this.questions[index].answers.splice(-1, 1);
      }
    },
  },
};
</script>

<style scoped>
.form_group {
  display: flex;
  flex-direction: row;
  margin: 10px 0px;
}

.form_group_secondary {
  display: flex;
  flex-direction: row;
  margin: 10px 10px 0px 20px;
}
.input {
  width: 100%;
  margin-bottom: 5px;
  margin-left: 5px;
  height: 25px;
  border-radius: 5px;
  border: 1px solid #555;
}

.input_label {
  font-size: 20px;
  font-weight: 500;
  white-space: pre;
  margin-right: 10px;
}

.input_label_secondary {
  font-size: 20px;
  font-weight: 400;
  white-space: pre;
  margin-right: 10px;
}

.answers {
  margin-left: 20px;
  margin-bottom: 20px;
}

.create_survey__container {
  overflow-y: scroll;
  height: 100%;
}

.button_add {
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

.button_minus {
  padding: 10px 15px;
  font-size: 16px;
  font-weight: 500;
  background: white;
  border: 1px solid rgb(168, 56, 50);
  border-radius: 5px;
  color: rgb(168, 56, 50);
  transition: all 0.3s ease-in-out;
  margin: 5px;
}

.button_add:hover {
  cursor: pointer;
  background: rgb(50, 168, 127);
  color: white;
}

.button_minus:hover {
  cursor: pointer;
  background: rgb(168, 56, 50);
  color: white;
}

.question {
  margin-bottom: 10px;
  box-shadow: 5px 5px 10px 5px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 10px;
}
</style>
