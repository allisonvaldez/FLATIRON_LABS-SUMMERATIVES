// // 1.  Fetch Data from an API- Using the fetch method, fetch to {JSON} Placeholder Typicode posts.

// // Refactor with async/await.
// // Create a function to house fetch and apply async to the function.
// // Apply await to the return of fetch.
// async function fetchPosts() {
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//     const posts = await response.json();
    
//     // Call displayPosts() function after fetch.
//     displayPosts(posts);
//   } catch (error) {
//     console.log("Error fetching posts:", error);
//   }
// }

// // 2.  Display Posts- Create a function to display posts called displayPosts().
// // Pass in the array of posts.
// function displayPosts(posts) {
//   // Select the ul once outside the loop for better performance
//   const ul = document.querySelector('#post-list');

//   // Loop through the posts list.
//   posts.forEach(post => {
//     // 3.  Within the loop:
    
//     // Create a li tag.
//     const li = document.createElement('li');
    
//     // Create a new h1 tag: Add the title as the textContent.
//     const h1 = document.createElement('h1');
//     h1.textContent = post.title;
    
//     // Create a new p tag.
//     const p = document.createElement('p');
    
//     // Add the body as the textContent.
//     p.textContent = post.body;
    
//     // Append h1 and p to li.
//     li.appendChild(h1);
//     li.appendChild(p);
    
//     // Append li to the ul: The id of the ul is post-list.
//     ul.appendChild(li);
//   });
// }

// // Initialize the fetch process
// fetchPosts();

// 1. Refactor with async/await.
// Create a function to house fetch and apply async to the function.
// Apply await to the return of fetch.
async function fetchPosts() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();
    
    // Call displayPosts() function after fetch.
    displayPosts(posts);
  } catch (error) {
    console.log("Error fetching posts:", error);
  }
}

// 2.  Display Posts- Create a function to display posts called displayPosts().
// Pass in the array of posts.
function displayPosts(posts) {
  // Select the ul: The id of the ul is post-list.
  const ul = document.querySelector('#post-list');

  // Loop through the posts list.
  posts.forEach(post => {
    // 3.  Within the loop:
    
    // Create a li tag.
    const li = document.createElement('li');
    
    // Create a new h1 tag: Add the title as the textContent.
    const h1 = document.createElement('h1');
    h1.textContent = post.title;
    
    // Create a new p tag.
    const p = document.createElement('p');
    
    // Add the body as the textContent.
    p.textContent = post.body;
    
    // Append h1 and p to li.
    li.appendChild(h1);
    li.appendChild(p);
    
    // Append li to the ul: The id of the ul is post-list.
    if (ul) {
      ul.appendChild(li);
    }
  });
}

// Call fetchPosts() to start the process
fetchPosts();