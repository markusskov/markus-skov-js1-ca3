const url =
  'https://ddragon.leagueoflegends.com/cdn/11.4.1/data/en_US/champion.json';

async function getChampions() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const result = data.data;
    console.log(result);

    const championList = Object.values(data.data);
    console.log(championList);

    for (let i = 0; i < championList.length; i++) {
      document.querySelector('main').innerHTML += `
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
      
      
      `;
    }
  } catch (error) {
    console.log(error);
  }
}

getChampions();
