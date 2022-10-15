/* CEP  */
const btnBusc = document.getElementById('btnBusc')

btnBusc.addEventListener('click', function () {
  document.getElementById("result").innerHTML = "";
  buscarCep(document.getElementById('cep').value);
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
  document.getElementById('error').appendChild(document.createTextNode("Algum erro aconteceu. Refaça sua pesquisa."))
})
}

/* ========== MAPAS ========== */
var geocoder;
  var map;
  function initialize() {
    geocoder = new google.maps.Geocoder();
    var latlng = new google.maps.LatLng(cep);
    var mapOptions = {
      zoom: 8,
      center: latlng
    }
    map = new google.maps.Map(document.getElementById('map'), mapOptions);
  }

  function codeAddress() {
    var address = document.getElementById('cep').value;
    geocoder.geocode( { 'cep': address}, function(results, status) {
      if (status == 'OK') {
        map.setCenter(results[0].geometry.location);
        var marker = new google.maps.Marker({
            map: map,
            position: results[0].geometry.location
        });
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
  }


