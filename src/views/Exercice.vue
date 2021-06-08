<template>
  <div class="about">
    <div class="home">
      <img alt="Vue logo" src="../assets/Logo.jpg" />
    </div>
    <h1>Exercice</h1>
    <ul id="example-1">
</ul>
    <table>
      <thead>
        <tr>
          <th>Tâches</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "Home",
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
