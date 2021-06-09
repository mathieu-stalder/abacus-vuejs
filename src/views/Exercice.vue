<template>
  <div class="about">
    <div class="home">
      <img alt="Vue logo" src="../assets/Logo.jpg" />
    </div>
    <h1>Exercice</h1>
    <ul id="example-1">
    </ul>
    <liste :itemsProp="items" /> 
  </div>
</template>

<script>
import Liste from "@/views/Liste.vue";

export default {
  name: "Home",
  components: {
        Liste
  },
  data() {
    return{
      items: [
        "Changer Roue",
        "Sortir la poubelle",
        "Préparer les vacances",
      ] 
    }
  },
};
</script>

<style>
table{
  width: 30%;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid;
}
td, th{
  text-align: left;
}
</style>
