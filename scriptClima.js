/* CLIMA  */
const btnCid = document.getElementById('btnCid')
   
btnCid.addEventListener('click', function () {
    clima(document.getElementById('cid').value);
    document.getElementById("resultp1").innerHTML = "";
    document.getElementById("resultp2").innerHTML = "";
    document.getElementById("resultp3").innerHTML = "";
    document.getElementById("resultp4").innerHTML = "";
    document.getElementById("error").innerHTML = "";
})

function clima(cid) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cid},BR&APPID=(AQUI-INSERIR-TOKEN-PARA ACESSO)`)
        .then((response) => {
            return response.json()
        })
        .then((res) => {
            console.log(res)
            let p1 = document.createElement('p')
            let p2 = document.createElement('p')
            let p3 = document.createElement('p')
            let p4 = document.createElement('p')

            let situacao = document.createTextNode(` ${res.weather[0].description}`);
            p1.appendChild(situacao);

            let temp = document.createTextNode(` ${res.main.temp}`);
            p2.appendChild(temp);

            let umidade = document.createTextNode(` ${res.main.humidity}`)
            p3.appendChild(umidade)

            let velocVento = document.createTextNode(` ${res.wind.speed}`)
            p4.appendChild(velocVento)

            document.getElementById('resultp1').appendChild(p1)
            document.getElementById('resultp2').appendChild(p2)
            document.getElementById('resultp3').appendChild(p3)
            document.getElementById('resultp4').appendChild(p4)
        })
        .catch(error => {
            document.getElementById('error').appendChild(document.createTextNode("Algum erro aconteceu. Refaça sua busca. Digite somente o nome da cidade."))
        })
}

  /*===================*/
