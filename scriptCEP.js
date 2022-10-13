/* CEP  */
const btnBusc = document.getElementById('btnBusc')

btnBusc.addEventListener('click', function () {
  buscarCep(document.getElementById('cep').value)
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

  let logradouro = document.createTextNode(`Logradouro: ${res.address}`)
  p1.appendChild(logradouro)

  let bairro = document.createTextNode(`Bairro: ${res.district}`)
  p2.appendChild(bairro)

  let cidade = document.createTextNode(`Cidade: ${res.city}`)
  p3.appendChild(cidade)

  let estado = document.createTextNode(`Estado: ${res.state}`)
  p4.appendChild(estado)

  document.getElementById('result').appendChild(p1)
  document.getElementById('result').appendChild(p2)
  document.getElementById('result').appendChild(p3)
  document.getElementById('result').appendChild(p4)
})
.catch(error => {
  document.getElementById('error').appendChild(document.createTextNode(error))
})
}