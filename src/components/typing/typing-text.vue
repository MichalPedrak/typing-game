<template xmlns="http://www.w3.org/1999/html">
  <div class="text-3xl mt-10 flex typing-area" style=" flex-wrap: wrap;">
    <div id="caret" class="default caret" :style="{left: caretPosition + 'px', top: caretPositionTop + 'px'}"></div>

    <div  class="flex  word" v-for="word in text">
      <p v-for="letter in word" :class="'letter'" >
        {{ letter }}
      <p v-if="letter === ' '">

        &nbsp;
      </p>
      </p>



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






let textToArray = 'Jeszcze gdy chodziłem do podstawówki, to był tam taki Paweł, i ja jechałem na rowerze, i go spotkałem, i potem jeszcze pojechałem do biedronki na lody, i po drodze do domu wtedy jeszcze, już do domu pojechałem. Jeszcze gdy chodziłem do podstawówki, to był tam taki Paweł, i ja jechałem na rowerze, i go spotkałem, i potem jeszcze pojechałem do biedronki na lody, i po drodze do domu wtedy jeszcze, już do domu pojechałem'


let counter = 0;
let text = ref([]);

textToArray.split(' ').forEach(function(item){

  text.value[counter] = []


  item.split('').forEach(function(letter){


    text.value[counter].push(letter);
  });

  text.value[counter].push(' ');
  counter++


});





// coloring text

let currentLetter = ref(0);
let currentWord = ref(0);
let caretPosition = ref(-1);
let caretPositionTop = ref(3);
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
      caretPositionTop.value += 37;
      caretPosition.value = 0;
    }





  }

  if (e.key === text.value[currentWord.value][currentLetter.value]) {

    let currentLetterSelect = document.querySelector(
        `.typing-area :nth-child(${currentWord.value+2}).word :nth-child(${currentLetter.value+1})`
    );


    let nextWord = document.querySelector(
        `.typing-area :nth-child(${currentWord.value+3}).word`
    );


    if(getOffset(currentLetterSelect).top !== getOffset(nextWord).top){

        toNextLine = true

    }

      caretPosition.value += 18.02


      currentLetterSelect.classList.add("text-white");


    currentLetter.value++;




  };


}




</script>
