const url =
  'https://ddragon.leagueoflegends.com/cdn/11.4.1/data/en_US/champion.json';

const container = document.getElementById('characters');

async function getChampions() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const result = data.data;
    console.log(result);

    const championList = Object.values(data.data);
    console.log(championList);

    for (let i = 0; i < championList.length; i++) {
      container.innerHTML += `
      <div class ="container">
      <div class="cards">
        <div class="card">
            <img src="http://ddragon.leagueoflegends.com/cdn/11.4.1/img/champion/${championList[i].image.full}">
            <h1>${championList[i].name}</h1>
            <p>${championList[i].title}</p>
            <p>${championList[i].partype}</p>
            <div class="card-button">
            <a href="details.html?id=${championList[i].id}">Read More</a>
            </div>
        </div>
      </div>
      </duv>
      
      
      `;
    }
  } catch (error) {
    container.innerHTML += `
    <div class ="container">
    <p> Oooops, looks like we can't connect to our API! </p>
    </div>
    `;
    console.log(error);
  }
}

getChampions();

// Loading GIF

const loading = function () {
  loading = setTimeout(showCharacters, 2000);
};
loading();

function showCharacters() {
  document.getElementById('loading').style.display = 'none';
  document.getElementById('characters').style.display = 'flex';
}
showCharacters();
