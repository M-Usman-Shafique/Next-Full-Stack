// app/api/getPosts.js
// infinite-moving-cards
export async function getPosts() {
    // Simulate an API call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          posts: [
            { id: 1, title: 'Post 1', date: '2024-07-30', author: 'Author 1', featuredImage: 'https://via.placeholder.com/350x200' },
            { id: 2, title: 'Post 2', date: '2024-07-29', author: 'Author 2', featuredImage: 'https://via.placeholder.com/350x200' },
            { id: 3, title: 'Post 3', date: '2024-07-28', author: 'Author 3', featuredImage: 'https://via.placeholder.com/350x200' },
            { id: 4, title: 'Post 4', date: '2024-07-27', author: 'Author 4', featuredImage: 'https://via.placeholder.com/350x200' },
            { id: 5, title: 'Post 5', date: '2024-07-26', author: 'Author 5', featuredImage: 'https://via.placeholder.com/350x200' },
          ],
        });
      }, 1000); // Simulate network delay
    });
  }
  