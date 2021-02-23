const token = 'asybMQo0JI7AeVcuov3p';
const url = 'https://the-one-api.dev/v2/movie';

async function getBooks() {
  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    const results = data.docs;
    console.log(results);

    for (let i = 0; i < results.length; i++) {
      document.querySelector('main').innerHTML += `
      <div class="cards">
        <a href="${results[i]._id}">${results[i].name}</a>
        </div>
        `;
    }
  } catch (error) {
    console.log(error);
  }
}

getBooks();
