// 3. (4p) Hämta posts med fetch från denna url: https://jsonplaceholder.typicode.com/posts
// Visa title och body från varje post på sidan inuti: <div id="posts"></div> (skapa HTML-elementet med JavaScript eller lägg till dem i HTML-filen)
// Visa endast posts från användaren med userId: 1
// Använd async/await med felhantering. Använd dig av filter samt forEach eller map.


// Din kod här


const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
const postsElement = document.getElementById("posts")

fetchDataWithAsyncAwait(apiUrl);

async function fetchDataWithAsyncAwait(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    const filteredPosts = data.filter(post => post.userId === 1);
    const html = filteredPosts.map(post => {
        return `<p>Title: ${post.title}, Body: ${post.body}</p>`
    }).join('');
    postsElement.innerHTML = html;
  } catch (error) {
    console.error('Error: ', error);
  }
}

