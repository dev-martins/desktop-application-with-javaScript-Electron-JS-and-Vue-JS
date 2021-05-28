<template>
  <v-container fluid>
    <div>
      <v-row>
        <v-file-input
          small-chips
          multiple
          label="Selecione as legendas"
          prepend-icon="mdi-message-text"
          v-model="files"
          @change="processSubtiles()"
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
import { ipcRenderer } from "electron";
import Pill from "./Pill";

export default {
  components: {
    Pill,
  },
  data: function () {
    return {
      files: [],
      groupedWords: [],
    };
  },
  methods: {
    processSubtiles() {
      const paths = this.files.map((f) => f.path);
      ipcRenderer.send("asynchronous-message", paths);
      ipcRenderer.on("asynchronous-reply", (event, resp) => {
        this.groupedWords = resp;
      });
    },
  },
};
</script>

<style></style>
