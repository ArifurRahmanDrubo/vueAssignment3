<template>
  <div id="app">
    <nav class="bg-gray-800 py-4">
      <div class="container mx-auto px-4">
        <router-link to="/" class="text-white font-semibold">Home</router-link>
        <router-link to="/add" class="text-white font-semibold ml-4">Add Blog</router-link>
      </div>
    </nav>

    <router-view/>

   
  </div>
</template>

<script setup>

</script>

<style>

</style>

