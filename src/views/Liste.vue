<template>   
    <table>
      <thead>
        <tr>
          <th>Tâches</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr id="liste" v-for="(item, index) in items" :key="index">
            <th> {{index}} </th>
            <th> {{item}} </th>
        </tr>
      </tbody>
    </table>
</template>

<script>
    export default {
        props: ["itemsProp"],
        data() {
            return {
                items: this.itemsProp
            }
        }
    }
</script>