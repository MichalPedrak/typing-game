<template>
  <div class="flex justify-center items-center">
    <div
      class="flex flex-col items-center justify-center pr-10 text-lg items-center"
    >
      <button @click="startCounting">Start</button>
      <button @click="resetCounting">Reset</button>
    </div>
    <h2 class="text-5xl">{{ time.toFixed(2) }}</h2>
  </div>
</template>

<script setup>
import { watch, ref } from "vue";

let oneCounter = true;
let time = ref(5);
let test = null;

function startCounting() {
  if (!oneCounter || time.value <= 0) return;
  oneCounter = false;
  test = setInterval(() => {
    time.value -= 0.05;
  }, 50);
}

function resetCounting() {
  clearInterval(test);
  oneCounter = true;
  time.value = 10;
}

watch(time, (time) => {
  if (time <= 0) {
    clearInterval(test);
    time.value = 0;
    oneCounter = true;
  }
});
</script>
