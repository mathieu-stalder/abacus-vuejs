<template>
  <div>
    <h1>{{ msg }}</h1>
    <h3>Objectifs</h3>
    <ul>
      <li>
        Afficher une liste, avec les éléments donnés
      </li>
      <li>
        Ajouter un élément dans la liste, avec la création d'un formulaire sur une autre page
      </li>
      <li>
        Supprimer un élément dans la liste
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Home",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  /*list-style-type: none;*/
  padding-left: 40%;
}
li {
  text-align: left;
  padding-bottom: 10px;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
