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
  
  const updatedTitle = ref(blog.value ? blog.value.title : '')
  const updatedContent = ref(blog.value ? blog.value.content : '')
  
  const updateBlog = () => {
    if (updatedTitle.value && updatedContent.value) {
      store.updateBlog({ id: blogId, title: updatedTitle.value, content: updatedContent.value })
      router.push(`/blog/${blogId}`)
    }
  }
  </script>
<template>
    <div class="container mx-auto mt-8">
      <h1 class="text-3xl font-bold">Edit Blog</h1>
      <form @submit.prevent="updateBlog">
        <div class="mb-4">
          <label for="title" class="block text-sm font-medium text-gray-700">Title</label>
          <input v-model="updatedTitle" type="text" id="title" name="title" class="mt-1 p-2 border border-gray-300 rounded-md w-full">
        </div>
        <div class="mb-4">
          <label for="content" class="block text-sm font-medium text-gray-700">Content</label>
          <textarea v-model="updatedContent" id="content" name="content" rows="4" class="mt-1 p-2 border border-gray-300 rounded-md w-full"></textarea>
        </div>
        <button type="submit" class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Update Blog</button>
      </form>
    </div>
  </template>
  
  
  
  <style>
  /* Tailwind CSS styles */
  </style>
  