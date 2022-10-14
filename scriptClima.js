/* CLIMA  */
const btnCid = document.getElementById('btnCid')
   
btnCid.addEventListener('click', function () {
    clima(document.getElementById('cidade').value)
})

function clima(cidade) {
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade},BR&APPID=ca7f11d79102681aa6822e5330961dc6`)
    .then((response) => {
        return response.json()
        })
    .then((res) => {
        console.log(res)

        let p1 = document.createElement('p')
        let p2 = document.createElement('p')
        let p3 = document.createElement('p')
        let p4 = document.createElement('p')

        let situacao = document.createTextNode(`Situação Atual: ${res.weather[0].description}`);
        p1.appendChild(situacao);

        let temp = document.createTextNode(`Temperatura: ${res.main.temp}`);
        let c = temp-
        p2.appendChild(temp);

        let umidade = document.createTextNode(`Umidade: ${res.main.humidity}`)
        p3.appendChild(umidade)

        let velocVento = document.createTextNode(`Velocidade do Vento: ${res.wind.speed}`)
        p4.appendChild(velocVento)

        document.getElementById('result').appendChild(p1)
        document.getElementById('result').appendChild(p2)
        document.getElementById('result').appendChild(p3)
        document.getElementById('result').appendChild(p4)
    })
    .catch(error => {
        document.getElementById('error').appendChild(document.createTextNode(error))
    })
  }

  /*===================*/

