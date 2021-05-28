<template>
  <div class="text-center">
    <v-chip  small color="primary" class="pr-0"> 
        {{ name }} 
        <v-chip  small class="ml-2 mr-0">{{ amount }}</v-chip>
    </v-chip>
  </div>
</template>

<script>
export default {
  props: ["name", "amount"],
};
</script>

<style></style>
