<!-- Blog.vue -->
<template>
    <div class="container mx-auto mt-8">
      <h1 class="text-3xl font-bold">{{ blog.title }}</h1>
      <p class="my-4">{{ blog.content }}</p>
      <router-link to="/" class="text-blue-500 hover:underline">Back to Home</router-link>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useStore } from '../store.js'
  import { useRouter } from 'vue-router'
  
  const store = useStore()
  const router = useRouter()
  
  const blogId = router.currentRoute.value.params.id
  const blog = ref(null)
  
  // Fetch the blog with the specified ID
  if (blogId) {
    blog.value = store.blogs.find(blog => blog.id === parseInt(blogId))
  }
  </script>
  