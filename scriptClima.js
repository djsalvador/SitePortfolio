/* CLIMA  */
const btnCid = document.getElementById('btnCid')
   
btnCid.addEventListener('click', function() {
    clima(document.getElementById('cid').value);
    document.getElementById("resultp1").innerHTML = "";
    document.getElementById("resultp2").innerHTML = "";
    document.getElementById("resultp3").innerHTML = "";
    document.getElementById("resultp4").innerHTML = "";
    document.getElementById("resultp5").innerHTML = "";
    document.getElementById("resultp6").innerHTML = "";
    document.getElementById("error").innerHTML = "";
})

function clima(cid) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cid},BR&APPID=ca7f11d79102681aa6822e5330961dc6&lang=pt_br&units=metric`)
        .then((response) => {
            return response.json()
        })
        .then((res) => {
            let p1 = document.createElement('p')
            let p2 = document.createElement('p')
            let p3 = document.createElement('p')
            let p4 = document.createElement('p')
            let p5 = document.createElement('p')
            let p6 = document.createElement('p')

            let situacao = document.createTextNode(`${res.weather[0].description}`);
            p1.appendChild(situacao);

            let temp = document.createTextNode(`${res.main.temp} ºC`);
            p2.appendChild(temp);

            let umidade = document.createTextNode(`${res.main.humidity} %`);
            p3.appendChild(umidade);

            let velocVento = document.createTextNode(`${Math.round(res.wind.speed*3.6)} km/h`);
            p4.appendChild(velocVento);

            let nascerSolUTC = (`${res.sys.sunrise}`);
                dateObj = new Date(nascerSolUTC * 1000);
                utcString = dateObj.toString();
            let timeNasc = utcString.slice(16, 24);
            let nascerSolBr = document.createTextNode(timeNasc);
            p5.appendChild(nascerSolBr);

            let porSolUTC = (`${res.sys.sunset}`);
                dateObj = new Date(porSolUTC * 1000);
                utcString = dateObj.toString();
            let timePor = utcString.slice(16, 24);
            let porSolBr = document.createTextNode(timePor);
            p6.appendChild(porSolBr);

            document.getElementById('resultp1').appendChild(p1)
            document.getElementById('resultp2').appendChild(p2)
            document.getElementById('resultp3').appendChild(p3)
            document.getElementById('resultp4').appendChild(p4)
            document.getElementById('resultp5').appendChild(p5)
            document.getElementById('resultp6').appendChild(p6)
        })
        .catch(error => {
            document.getElementById('error').appendChild(document.createTextNode("Algum erro aconteceu. Refaça sua busca. Digite somente o nome da cidade."))
        })
}
