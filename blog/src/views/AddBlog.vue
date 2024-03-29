<script setup>
  import { ref } from 'vue'
  import { useStore } from '../store.js'
  import { useRouter } from 'vue-router'
  
  const store = useStore()
  const router = useRouter()
  
  const title = ref('')
  const content = ref('')
  
  const addBlog = () => {
    if (title.value && content.value) {
      store.addBlog({ title: title.value, content: content.value })
      router.push('/')
    }
  }
  </script>
  
<template>
    <div class="container mx-auto mt-8">
      <h1 class="text-3xl font-bold">Add Blog</h1>
      <form @submit.prevent="addBlog">
        <div class="mb-4">
          <label for="title" class="block text-sm font-medium text-gray-700">Title</label>
          <input v-model="title" type="text" id="title" name="title" class="mt-1 p-2 border border-gray-300 rounded-md w-full">
        </div>
        <div class="mb-4">
          <label for="content" class="block text-sm font-medium text-gray-700">Content</label>
          <textarea v-model="content" id="content" name="content" rows="4" class="mt-1 p-2 border border-gray-300 rounded-md w-full"></textarea>
        </div>
        <button type="submit" class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Add Blog</button>
      </form>
    </div>
  </template>
  
  