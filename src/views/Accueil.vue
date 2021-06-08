<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/Logo.jpg"/>
    <Home msg="ABACUS - Exercice VueJS" />
  </div>
</template>

<script>
// @ is an alias to /src
import Home from "@/components/Home.vue";

export default {
  name: "Accueil",
  components: {
    Home,
  },
};
</script>
