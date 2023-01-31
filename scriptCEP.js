/* ===== CEP (BUSCANDO PELO SITE DO APICEP)=====  */
const btnBusc = document.getElementById('btnBusc')

btnBusc.addEventListener('click', function () {
  buscarCep(document.getElementById('cep').value);
  document.getElementById("resultp1").innerHTML = "";
  document.getElementById("resultp2").innerHTML = "";
  document.getElementById("resultp3").innerHTML = "";
  document.getElementById("resultp4").innerHTML = "";
  document.getElementById("error").innerHTML = "";
})

function buscarCep(cep) {
  fetch(`https://cdn.apicep.com/file/apicep/${cep}.json`)
    .then((response) => {
      return response.json()
    })
    .then(res => {
      let p1 = document.createElement('p')
      let p2 = document.createElement('p')
      let p3 = document.createElement('p')
      let p4 = document.createElement('p')
      let p5 = document.createElement('p')

      let logradouro = document.createTextNode(`${res.address}`);
      p1.appendChild(logradouro);

      let bairro = document.createTextNode(`${res.district}`);
      p2.appendChild(bairro);

      let cidade = document.createTextNode(`${res.city}`);
      p3.appendChild(cidade);

      let estado = document.createTextNode(`${res.state}`);
      p4.appendChild(estado);

      let mapaStr = `https://www.openstreetmap.org/search?query=${res.district},${res.city},${res.state}`;
      let mapa = document.createTextNode(mapaStr);
      p5.appendChild(mapa);
      
      document.getElementById('resultp1').appendChild(p1)
      document.getElementById('resultp2').appendChild(p2)
      document.getElementById('resultp3').appendChild(p3)
      document.getElementById('resultp4').appendChild(p4)
      document.getElementById('mapaCep').appendChild(p5)

      btnBuscMapa.onclick = function() {
            window.open(mapaStr,'_blank','width=600, height=600');
          }

    })
  .catch(error => {
    document.getElementById('error').appendChild(document.createTextNode("Algum erro aconteceu. Refaça sua pesquisa."))
  })
}

