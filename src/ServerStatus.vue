<template>
  <div>
    <p>Server Status : {{ status }}  {{ title }} </p>
    <hr>
    <button @click="changeStatus">Change Status</button>
  </div>
</template>

<script>
  export default {
    data : function (){
      return {
        status : "Critical"
      }
    },
    props : {
      title: {
        default: '',
        type : String
      }
    },

    methods : {
      changeStatus(){
        this.status = "Normal";
      }
    }
  }
</script>

<style></style>
