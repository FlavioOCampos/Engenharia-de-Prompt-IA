function pegarLocalizacao(){

navigator.geolocation.getCurrentPosition(
    
    (posicao)=>{

        const latitude = posicao.coords.latitude;
        const longitude = posicao.coords.longitude;

        document.getElementById("status").innerHTML = `
        
        Latitude: ${latitude}
        <br>
        Longitude: ${longitude}
        
        `;

        gerarLink(latitude, longitude);

    },

    ()=>{

        alert("Não foi possível pegar localização");

    }

);

}

function gerarLink(lat, long){

const link = `
aluno.html?lat=${lat}&long=${long}
`;

document.getElementById("linkGerado").innerHTML = `
<a href="${link}">
${link}
</a>
`;

}
