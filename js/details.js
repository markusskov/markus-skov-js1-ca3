const detailContainer = document.querySelector('.champion-details');

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get('id');

console.log(id);

const url =
  'https://ddragon.leagueoflegends.com/cdn/11.4.1/data/en_US/champion/' +
  id +
  '.json';

async function singleCharacter() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const result = data.data;
    console.log(result);

    const championList = Object.values(data.data);
    console.log(championList);
    for (let i = 0; i < championList.length; i++) {
      document.querySelector('.champion-details').innerHTML = `
      <img src="http://ddragon.leagueoflegends.com/cdn/11.4.1/img/champion/${championList[i].image.full}">
        <div class="champion-info">
            <h1>${championList[i].name}</h1>
            <h4>${championList[i].title}</h4>
            <div class="allytips">
                <p class="bold">Ally tips:<p><p> ${championList[i].allytips[0]}</p>
                <p> ${championList[i].allytips[1]}</p>
                </div>
                <div class="enemytips">
                <p class="bold">Enemy tips:</p> <p>${championList[i].enemytips[0]}<p>
                <p>${championList[i].enemytips[1]}<p>
                <div class="divider"></div>
                <div class="allytips">
                <p class="bold">Lore:<p><p> "${championList[i].lore}"</p>
                </div>
                <div class="divider"></div>
                <div class="allytips">
                <p class="bold">Stats:<p><p> Armor: ${championList[i].stats.armor}</p>
                <p> Attack Damage: ${championList[i].stats.attackdamage}</p>
                <p> Attack Range: ${championList[i].stats.attackrange}</p>
                <p> Attack Speed: ${championList[i].stats.attackspeed}</p>
                <p> HP: ${championList[i].stats.hp}</p>
                </div>
            </div>
        </div>
    `;
    }
  } catch (error) {
    console.log(error);
  }
}

singleCharacter();
