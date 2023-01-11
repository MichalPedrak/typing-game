<template>
  <div class="text-3xl mt-10 flex " style="max-width: 250px; flex-wrap: wrap;">
    <div id="caret" class="default caret" :style="{left: caretPosition + 'px', top: caretPositionTop + 'px'}"></div>

    <div class="word-0 flex">
      <p class="letter-0">H</p>
      <p class="letter-1">e</p>
      <p class="letter-2">l</p>
      <p class="letter-3">l</p>
      <p class="letter-4">o</p>
      <p class="letter-5 " >&nbsp<span style="display: none"></span></p>

    </div>
    <div class="word-1 flex">
      <p class="letter-0">W</p>
      <p class="letter-1">o</p>
      <p class="letter-2">r</p>
      <p class="letter-3">l</p>
      <p class="letter-4">d</p>
      <p class="letter-5">&nbsp;</p>
    </div>
    <div class="word-2 flex">
      <p class="letter-0">W</p>
      <p class="letter-1">o</p>
      <p class="letter-2">r</p>
      <p class="letter-3">l</p>
      <p class="letter-4">d</p>
      <p class="letter-5">&nbsp;</p>
    </div>
    <div class="word-3 flex">
      <p class="letter-0">W</p>
      <p class="letter-1">o</p>
      <p class="letter-2">r</p>
      <p class="letter-3">l</p>
      <p class="letter-4">d</p>
      <p class="letter-5">&nbsp;</p>
    </div>
    <div class="word-4 flex">
      <p class="letter-0">W</p>
      <p class="letter-1">o</p>
      <p class="letter-2">r</p>
      <p class="letter-3">l</p>
      <p class="letter-4">d</p>
      <p class="letter-5">&nbsp;</p>
    </div>
    <div class="word-5 flex">
      <p class="letter-0">W</p>
      <p class="letter-1">o</p>
      <p class="letter-2">r</p>
      <p class="letter-3">l</p>
      <p class="letter-4">d</p>
      <p class="letter-5">&nbsp;</p>
    </div>
    <div class="word-6 flex">
      <p class="letter-0">W</p>
      <p class="letter-1">o</p>
      <p class="letter-2">r</p>
      <p class="letter-3">l</p>
      <p class="letter-4">d</p>
      <p class="letter-5">&nbsp;</p>
    </div>
    <div class="word-7 flex">
      <p class="letter-0">W</p>
      <p class="letter-1">o</p>
      <p class="letter-2">r</p>
      <p class="letter-3">l</p>
      <p class="letter-4">d</p>
      <p class="letter-5">&nbsp;</p>
    </div>
    <div class="word-8 flex">
      <p class="letter-0">W</p>
      <p class="letter-1">o</p>
      <p class="letter-2">r</p>
      <p class="letter-3">l</p>
      <p class="letter-4">d</p>
      <p class="letter-5">&nbsp;</p>
    </div>

  </div>
</template>

<script setup>
// import axios from "axios";
import { ref } from "vue";

// let config = {
//   headers:{
//     'X-Api-Key': "JujDB6vFHNoSm0Ycpb6ofQ==5IYG5V2PC1K3lTSS",
//   }
// };
// async function getQuote(){
//   await axios
//       .get('https://api.api-ninjas.com/v1/quotes?category=happiness', config)
//       .then((response) => {
//         console.log(response.data[0]['quote'])
//         text.value = response.data[0]['quote']
//         letters.value = [text.value];
//       })
// }
// onBeforeMount(() => getQuote());

let text = ref([
  ["H", "e", "l", "l", "o", " "],
  ["W", "o", "r", "l", "d", " "],
  ["W", "o", "r", "l", "d", " "],
  ["W", "o", "r", "l", "d", " "],
  ["W", "o", "r", "l", "d", " "],
  ["W", "o", "r", "l", "d", " "],
  ["W", "o", "r", "l", "d", " "],
  ["W", "o", "r", "l", "d", " "],
  ["W", "o", "r", "l", "d"],
  ["W", "o", "r", "l", "d"],
  ["W", "o", "r", "l", "d"],
  ["W", "o", "r", "l", "d"],
  ["W", "o", "r", "l", "d"],
  ["W", "o", "r", "l", "d"],
  ["W", "o", "r", "l", "d"],
  ["W", "o", "r", "l", "d"],
  ["W", "o", "r", "l", "d"],
  ["W", "o", "r", "l", "d"],
  ["W", "o", "r", "l", "d"],
]);

// coloring text

let currentLetter = ref(0);
let currentWord = ref(0);
let caretPosition = ref(-1);
let caretPositionTop = ref(0);
let toNextLine = false;


window.addEventListener("keydown", colorText);

function getOffset(el) {
  const rect = el.getBoundingClientRect();
  return {
    left: rect.left + window.scrollX,
    top: rect.top + window.scrollY
  };
}


function colorText(e) {

    if (text.value[currentWord.value].length - 1 <= currentLetter.value) {
      currentWord.value++;
      currentLetter.value = 0;
      caretPosition.value += 18.02

    if(toNextLine){
      toNextLine = false;
      caretPositionTop.value += 38;
      caretPosition.value = 0;

    }





    }

    if (e.key === text.value[currentWord.value][currentLetter.value]) {
      let currentLetterSelect = document.querySelector(
        ".word-" + currentWord.value + " .letter-" + currentLetter.value

      );

      let nextWord = document.querySelector(
          ".word-" + (Number(currentWord.value) + 1)
      );


    if(getOffset(nextWord).top  != getOffset(currentLetterSelect).top){
      toNextLine = true;

    }



      caretPosition.value += 18.02


      currentLetterSelect.classList.add("text-white");

      currentLetter.value++;

      console.log(currentLetterSelect);

  };


}




</script>
