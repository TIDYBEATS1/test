const grid = document.getElementById('amiiboGrid');
const searchInput = document.getElementById('search');

function loadAmiibos() {
  fetch('https://www.amiiboapi.com/api/amiibo/')
    .then(res => res.json())
    .then(data => {
      displayAmiibos(data.amiibo);
      searchInput.addEventListener('input', () => {
        const filtered = data.amiibo.filter(a =>
          a.name.toLowerCase().includes(searchInput.value.toLowerCase())
        );
        displayAmiibos(filtered);
      });
    });
}

function displayAmiibos(amiibos) {
  grid.innerHTML = '';
  amiibos.forEach(a => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <a href="amiibo.html?id=${encodeURIComponent(a.tail)}">
        <img src="${a.image}" alt="${a.name}">
        <h3>${a.name}</h3>
        <p>${a.amiiboSeries}</p>
      </a>
    `;
    grid.appendChild(card);
  });
}

loadAmiibos();
