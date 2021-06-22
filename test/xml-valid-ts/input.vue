<template>
  <div @click="testMethod">{{ text }}</div>
  <img src="source.png" />
</template>

<script lang="ts" name="TestComponent" setup>
import { ref } from "vue";
const text = ref("original");
const testMethod = () => {
  text.value = "changed";
};
</script>
