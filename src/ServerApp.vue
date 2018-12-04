<template>
    <div class="container">
        <Header></Header>
        <hr>
        <div class="row">
            <server-list></server-list>
            <server-details></server-details>
        </div>
        <hr>
        <Footer></Footer>
    </div>
</template>

<script>
  import ServerDetails from "./ServerDetails.vue"
  import ServerList  from "./ServerList.vue"
  import Header from "./header.vue"
  import Footer from "./footer"
  export default {
    components : {
      "server-details" : ServerDetails,
       "server-list" : ServerList,
       "Header" : Header,
       "Footer" : Footer
    }
  }
</script>

<style>

</style>
