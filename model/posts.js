module.exports = {
  posts: [
    {
      id: "eifjr383",
      title: "Teste",
      description: "olá",
    },
  ],
  getAll() {
    return this.posts;
  },
  newPost(title, description) {
    const existingPost = this.posts.find(
      (post) => post.title === title || post.id === generateID()
    );

    if (existingPost) {
      throw new Error("Post with the same title or ID already exists");
    }
    this.posts.push({ id: generateID(), title, description });
  },
  deletePost(id) {
    const index = this.posts.findIndex((post) => post.id === id);
    if (index !== -1) {
      this.posts.splice(index, 1);
      return true; // Indicate successful deletion
    }
    return false; // Indicate post not found
  },
};
function generateID() {
  return Math.random().toString(36).substring(2, 9);
}
