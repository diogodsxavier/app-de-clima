function colocarDadosNaTela(dados) {
    console.log(dados);
    document.querySelector('.cidade').innerHTML = 'Tempo em ' + dados.name;
    document.querySelector('.temp').innerHTML = `${Math.floor(dados.main.temp)}°C`;
    document.querySelector('.texto-previsao').innerHTML = dados.weather[0].description;
    document.querySelector('.umidade').innerHTML = `Umidade ${dados.main.humidity}%`
    document.querySelector('.img-previsao').src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`;

    document.querySelector('.max-temp').innerHTML = `Máx: ${Math.floor(dados.main.temp_max)}`;
    document.querySelector('.min-temp').innerHTML = `Min: ${Math.floor(dados.main.temp_min)}`;
}

async function buscarCidade(cidade) {
    const key = '8607729a76234c7251a57ac92ba67e1f';

    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`)
        .then(response => response.json())
        .catch(e => console.log(e));

        console.log(dados);

    colocarDadosNaTela(dados);
}

function cliqueiNoBotao() {
    const cidade = document.querySelector('.input-cidade').value;

    buscarCidade(cidade);
} 
