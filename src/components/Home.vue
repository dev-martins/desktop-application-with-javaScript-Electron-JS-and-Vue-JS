<template>
  <v-container fluid>
    <div>
      <v-row>
          <v-file-input
            small-chips
            multiple
            label="Selecione legendas"
            prepend-icon="mdi-message-text"
          ></v-file-input>
      </v-row>
      <v-row>
        <v-col cols="2" v-for="word in groupedWords" :key="word.name">
          <pill :name="word.name" :amount="word.amount" />
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import Pill from "./Pill";

export default {
  components: {
    Pill,
  },
  data: function () {
    return {
      groupedWords: [
        { name: "I", amount: 1234 },
        { name: "You", amount: 900 },
        { name: "He", amount: 853 },
        { name: "I", amount: 1234 },
        { name: "You", amount: 900 },
        { name: "He", amount: 853 },
        { name: "I", amount: 1234 },
        { name: "You", amount: 900 },
        { name: "He", amount: 853 },
        { name: "I", amount: 1234 },
        { name: "You", amount: 900 },
        { name: "He", amount: 853 },
        { name: "I", amount: 1234 },
        { name: "You", amount: 900 },
        { name: "He", amount: 853 },
        { name: "I", amount: 1234 },
        { name: "You", amount: 900 },
        { name: "He", amount: 853 },
      ],
    };
  },
};
</script>

<style></style>
