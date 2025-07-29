const params = new URLSearchParams(window.location.search);
const id = params.get('id');
const container = document.getElementById('amiiboDetail');

fetch(`https://www.amiiboapi.com/api/amiibo/?tail=${id}`)
  .then(res => res.json())
  .then(data => {
    const a = data.amiibo[0];
    container.innerHTML = `
      <h1>${a.name}</h1>
      <img src="${a.image}" alt="${a.name}" style="max-width:200px;">
      <p><strong>Series:</strong> ${a.amiiboSeries}</p>
      <p><strong>Game Series:</strong> ${a.gameSeries}</p>
      <p><strong>Character:</strong> ${a.character}</p>
      <p><strong>Type:</strong> ${a.type}</p>
    `;
  });
