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
    console.log(res)
    let p1 = document.createElement('p')
    let p2 = document.createElement('p')
    let p3 = document.createElement('p')
    let p4 = document.createElement('p')

    let logradouro = document.createTextNode(` ${res.address}`)
    p1.appendChild(logradouro)

    let bairro = document.createTextNode(` ${res.district}`)
    p2.appendChild(bairro)

    let cidade = document.createTextNode(` ${res.city}`)
    p3.appendChild(cidade)

    let estado = document.createTextNode(` ${res.state}`)
    p4.appendChild(estado)

    document.getElementById('resultp1').appendChild(p1)
    document.getElementById('resultp2').appendChild(p2)
    document.getElementById('resultp3').appendChild(p3)
    document.getElementById('resultp4').appendChild(p4)
  })
  .catch(error => {
    document.getElementById('error').appendChild(document.createTextNode("Algum erro aconteceu. Refaça sua pesquisa."))
  })
}
/* ===== CEP =====  */