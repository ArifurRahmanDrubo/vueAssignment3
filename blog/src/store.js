import { defineStore } from 'pinia'

 export const useStore = defineStore('store', {
  state: () => ({
    blogs: [
      { id: 1, title: 'First Blog', content: 'This is the content of the first blog entry.' },
      { id: 2, title: 'Second Blog', content: 'This is the content of the second blog entry.' },
      { id: 3, title: 'Third Blog', content: 'This is the content of the third blog entry.' }
    ]
  }),

  getters: {
    filteredStore (){
      return this.blogs;
    }
  },

  actions: {
    addBlog(blog) {
      this.blogs.push({ id: this.blogs.length + 1, ...blog })
    },
    updateBlog(blog) {
      const index = this.blogs.findIndex(b => b.id === blog.id)
      if (index !== -1) {
        this.blogs.splice(index, 1, blog)
      }
    },
    deleteBlog(id) {
      const index = this.blogs.findIndex(b => b.id === id)
      if (index !== -1) {
        this.blogs.splice(index, 1)
      }
    }
  }
})


