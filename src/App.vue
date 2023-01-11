<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <div class="wrapper">
      <nav class="nav flex-center">
        <RouterLink class="css-button-retro--yellow" to="/"
          >Typing game</RouterLink
        >
        <RouterLink class="css-button-retro--yellow" to="/ranking"
          >Ranking</RouterLink
        >
      </nav>
    </div>
  </header>
  <main>
    <RouterView />
  </main>
</template>
