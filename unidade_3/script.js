function usarLocalizacao(){

navigator.geolocation.getCurrentPosition((posicao)=>{

const lat = posicao.coords.latitude;

const long = posicao.coords.longitude;

const resultado =
document.getElementById("resultado");

const base =
"https://flavioocampos.github.io/Engenharia-de-Prompt-IA/unidade_3/";

const linkAluno =
`${base}aluno.html?lat=${lat}&long=${long}`;

const linkMapa =
`${base}mapa.html?lat=${lat}&long=${long}`;

resultado.innerHTML = `

<br>

<p><strong>Latitude:</strong> ${lat}</p>

<p><strong>Longitude:</strong> ${long}</p>

<br>

<a href="${linkAluno}" target="_blank">

🔗 Abrir Painel do Aluno

</a>

<br><br>

<a href="${linkMapa}" target="_blank">

🗺️ Abrir Mapa da Aula

</a>

`;

});

}

function calcularDistancia(lat1, lon1, lat2, lon2){

const R = 6371e3;

const f1 = lat1 * Math.PI / 180;
const f2 = lat2 * Math.PI / 180;

const df = (lat2 - lat1) * Math.PI / 180;
const dl = (lon2 - lon1) * Math.PI / 180;

const a =

Math.sin(df / 2) * Math.sin(df / 2)

+

Math.cos(f1)

*

Math.cos(f2)

*

Math.sin(dl / 2)

*

Math.sin(dl / 2);

const c =
2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

return R * c;

}

function confirmarPresenca(){

const params =
new URLSearchParams(window.location.search);

const latProfessor =
params.get("lat");

const longProfessor =
params.get("long");

navigator.geolocation.getCurrentPosition((posicao)=>{

const latAluno =
posicao.coords.latitude;

const longAluno =
posicao.coords.longitude;

const distancia =
calcularDistancia(

latProfessor,
longProfessor,
latAluno,
longAluno

);

const resultado =
document.getElementById("resultado");

if(distancia <= 50){

resultado.innerHTML =

`✅ Presença confirmada!<br><br>
Distância: ${Math.round(distancia)} metros`;

}else{

resultado.innerHTML =

`❌ Você está longe da sala.<br><br>
Distância: ${Math.round(distancia)} metros`;

}

});

}
