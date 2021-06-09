<template>
    <form>
        <div class="form-group">
            <label for="tache">Tâche&emsp;</label>
            <input type="email" v-model="tache" class="form-control" id="tache" placeholder="Entrez la tâche.">
        </div>
        <button type="submit" class="btn btn-primary" @click="addTask()" >Submit</button>
    </form>
</template>

<script>
    export default {
        data() {
            return {
                tache: ""
            }
        },
        methods: {
            addTask() {
                if ( this.tache == "" ) {
                    return ;
                }
                
                //let data = {
                //    task = this.tache
                //};

                //this.$router.push({
                //    name: "dataList", //use name for router push
                //    params: { data }
                //});

            }
        }
    }
</script>

<style> 
    .form-group {
        padding: 10px;
        outline-color: #e6e6e6;
    }
</style>